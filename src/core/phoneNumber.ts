import type { Country } from '@/interfaces'
import { getAllCountryNames } from './countries'

export const searchByPhoneCode = (countries: Country[], phoneCode: string): Country[] => {
  return countries.filter(country =>
    country.phone_code.toString().startsWith(phoneCode)
  )
}

export const searchByAllFields = (countries: Country[], query: string): Country[] => {
  return countries.filter(country => {
    const countryCode = country.country_code.toLowerCase()
    const phoneCode = country.phone_code?.toString() || ''
    const allNames = getAllCountryNames(country.country_code)

    return (
      countryCode.includes(query) ||
      phoneCode.includes(query) ||
      allNames.some(name => name.toLowerCase().includes(query))
    )
  })
}

export const excludeFavorites = (
  countries: Country[],
  favoritesCountries?: string[]
): Country[] => {
  if (!favoritesCountries?.length) return countries
  const favorites = new Set(
    favoritesCountries.map(code => code.toLowerCase())
  )
  return countries.filter(
    country => !favorites.has(country.country_code.toLowerCase())
  )
}

export const filterCountries = (
  countries: Country[],
  searchQuery: string,
  options: {
    hideFavorites?: boolean
    favoritesCountries?: string[]
  } = {}
): Country[] => {
  const { hideFavorites = true, favoritesCountries } = options

  if (!searchQuery) {
    return hideFavorites ? excludeFavorites(countries, favoritesCountries) : countries
  }

  const query = searchQuery.toLowerCase()

  if (query.startsWith('+')) {
    const phoneCode = query.slice(1)
    const filtered = searchByPhoneCode(countries, phoneCode)
    return hideFavorites ? excludeFavorites(filtered, favoritesCountries) : filtered
  }

  const filtered = searchByAllFields(countries, query)
  return hideFavorites ? excludeFavorites(filtered, favoritesCountries) : filtered
}

export const findCountryByRanges = (countries: Country[], cleanValue: string): Country | undefined => {
  return countries.find(c => {
    if (!c.phone_ranges?.length) return false
    const code = c.phone_code.toString()
    if (!cleanValue.startsWith(code)) return false

    const nextDigit = cleanValue[code.length]
    if (!nextDigit) return false

    return c.phone_ranges.includes(parseInt(nextDigit))
  })
}

export const findCountryByPhoneCode = (countries: Country[], cleanValue: string): Country | undefined => {
  return countries.find(c => cleanValue.startsWith(c.phone_code.toString()))
}

export interface ParsedPhoneNumber {
  country: Country | null
  nationalNumber: string
}

export const parsePhoneNumberValue = (value: string, countries: Country[]): ParsedPhoneNumber => {
  if (!value) {
    return { country: null, nationalNumber: '' }
  }

  const cleanValue = value.replace(/^\+/, '')

  const countryWithRanges = findCountryByRanges(countries, cleanValue)
  if (countryWithRanges) {
    return {
      country: countryWithRanges,
      nationalNumber: cleanValue.slice(countryWithRanges.phone_code.toString().length)
    }
  }

  const country = findCountryByPhoneCode(countries, cleanValue)
  if (country) {
    return {
      country,
      nationalNumber: cleanValue.slice(country.phone_code.toString().length)
    }
  }

  return { country: null, nationalNumber: '' }
}
