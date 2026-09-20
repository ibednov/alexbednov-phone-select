import countriesData from '@/json/countries.json'
import { loadTranslations } from '@/utils/translations'
import type { Language, CountryType } from '@/interfaces'

export type Country = CountryType

export type CountryListOptions = {
  onlyCountries?: string[]
}

const buildCountriesList = (lang: Language): Country[] => {
  const translations = loadTranslations()
  return countriesData.map(country => ({
    ...country,
    name: translations[lang]?.countries[country.country_code] || country.country_code
  }))
}

export const applyCountryWhitelist = (
  countries: Country[],
  onlyCountries?: string[]
): Country[] => {
  if (!onlyCountries?.length) return countries
  const allowed = new Set(onlyCountries.map(code => code.toLowerCase()))
  return countries.filter(country => allowed.has(country.country_code.toLowerCase()))
}

export const getCountries = (
  lang: Language = 'ru',
  onlyCountries?: string[]
): Country[] => {
  return applyCountryWhitelist(buildCountriesList(lang), onlyCountries)
}

export const getCountryByCode = (
  code: string,
  lang: Language = 'ru',
  onlyCountries?: string[]
): Country | undefined => {
  return getCountries(lang, onlyCountries).find(
    country => country.country_code.toLowerCase() === code.toLowerCase()
  )
}

export const getCountryByName = (
  name: string,
  lang: Language = 'ru',
  onlyCountries?: string[]
): Country | undefined => {
  return getCountries(lang, onlyCountries).find(
    country => country.country_code.toLowerCase() === name.toLowerCase()
  )
}

export const getCountryByPhoneCode = (
  phoneCode: number,
  lang: Language = 'ru',
  onlyCountries?: string[]
): Country | undefined => {
  return getCountries(lang, onlyCountries).find(country => country.phone_code === phoneCode)
}

export const getFlagPath = (countryCode: string): string => {
  return `/src/assets/flags/${countryCode}.svg`
}

export const getAllCountryNames = (countryCode: string): string[] => {
  const allTranslations = loadTranslations()
  const names = Object.values(allTranslations).map(lang => lang.countries[countryCode])
  return [...new Set(names.filter(Boolean))]
}
