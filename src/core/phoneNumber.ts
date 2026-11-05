import type { Country } from '@/interfaces'
import { getAllCountryNames, getCountries, getCountryByCode } from './countries'
import { applyMask, getMaskForCountry } from './phoneMask'

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
  let best: Country | undefined
  let bestLen = 0
  for (const country of countries) {
    const code = country.phone_code.toString()
    if (cleanValue.startsWith(code) && code.length > bestLen) {
      best = country
      bestLen = code.length
    }
  }
  return best
}

export interface ParsedPhoneNumber {
  country: Country | null
  nationalNumber: string
}

/** Digits only; leading `00` (intl prefix) removed. */
export const normalizePhoneDigits = (value: string): string => {
  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('00')) {
    digits = digits.slice(2)
  }
  return digits
}

export const parsePhoneNumberValue = (value: string, countries: Country[]): ParsedPhoneNumber => {
  if (!value) {
    return { country: null, nationalNumber: '' }
  }

  const cleanValue = normalizePhoneDigits(value)
  if (!cleanValue) {
    return { country: null, nationalNumber: '' }
  }

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

export interface StripLeadingCallingCodeOptions {
  /** Currently selected country — preferred when stripping a bare calling-code prefix. */
  selectedCountry?: Country | null
  /** Country list for full international detection (e.g. paste `+375…` while another country is selected). */
  countries?: Country[]
  /**
   * Max national significant digits (from mask). When the digit string is longer and starts with a
   * calling code, the prefix is stripped even without a leading `+` / `00`.
   */
  maxNationalDigits?: number
}

export interface StripLeadingCallingCodeResult {
  /** Value to feed into the national input: national digits when stripped, otherwise the original raw string. */
  value: string
  /** Digits-only national part when known. */
  nationalDigits: string
  /** Detected or confirmed country when a calling code was stripped; otherwise null. */
  country: Country | null
  stripped: boolean
}

const isExplicitInternational = (raw: string): boolean => {
  const trimmed = raw.trim()
  return trimmed.startsWith('+') || trimmed.startsWith('00')
}

/**
 * Strip a leading country calling code from raw phone input (paste/type of a full international
 * number into the national field). Pure helper — wire via UI `stripCountryCode` prop.
 *
 * Strips when:
 * - input is explicit international (`+…` / `00…`) and parses to a known country, or
 * - digits start with the selected country's calling code and length exceeds national max (or
 *   remainder exactly fits the national length).
 */
export const stripLeadingCallingCode = (
  raw: string,
  options: StripLeadingCallingCodeOptions = {}
): StripLeadingCallingCodeResult => {
  const { selectedCountry = null, countries = [], maxNationalDigits } = options

  if (!raw) {
    return { value: raw, nationalDigits: '', country: null, stripped: false }
  }

  const explicitIntl = isExplicitInternational(raw)
  const digits = normalizePhoneDigits(raw)

  if (!digits) {
    return { value: raw, nationalDigits: '', country: null, stripped: false }
  }

  const overlong =
    maxNationalDigits != null && digits.length > maxNationalDigits

  const sameCountry = (a: Country, b: Country) =>
    a.country_code.toLowerCase() === b.country_code.toLowerCase() ||
    a.phone_code === b.phone_code

  // Full parse: explicit +/00, or digit string longer than national mask.
  if (countries.length > 0 && (explicitIntl || overlong)) {
    const parsed = parsePhoneNumberValue(digits, countries)
    if (parsed.country) {
      const nationalDigits = normalizePhoneDigits(parsed.nationalNumber)
      const matchesSelected =
        !selectedCountry || sameCountry(parsed.country, selectedCountry)

      // Explicit intl may switch country; bare overlong digits only strip when country matches selection
      // (or there is no selection yet).
      if (explicitIntl || matchesSelected) {
        return {
          value: nationalDigits,
          nationalDigits,
          country: parsed.country,
          stripped: true,
        }
      }
    }
  }

  // Selected country calling-code prefix (no full list / parse miss).
  if (selectedCountry) {
    const code = String(selectedCountry.phone_code)
    if (digits.startsWith(code) && digits.length > code.length) {
      const rest = digits.slice(code.length)
      const restFits =
        maxNationalDigits == null || rest.length <= maxNationalDigits
      const restExact =
        maxNationalDigits != null && rest.length === maxNationalDigits

      if (explicitIntl || (overlong && restFits && rest.length > 0) || restExact) {
        return {
          value: rest,
          nationalDigits: rest,
          country: selectedCountry,
          stripped: true,
        }
      }
    }
  }

  return { value: raw, nationalDigits: digits, country: null, stripped: false }
}

export interface FormatPhoneNumberOptions {
  /** ISO country code (by/ru/us). Preferred over auto-detect from the value. */
  countryCode?: string
}

/**
 * Format a phone value for display: `+{phone_code} {masked national}`.
 * Country from explicit `countryCode`, else `parsePhoneNumberValue` on the full country list.
 * Unknown country → original value, or `+{digits}` when the input looked international.
 */
export const formatPhoneNumber = (
  value: string,
  opts: FormatPhoneNumberOptions = {}
): string => {
  if (value == null || value === '') return value

  let country: Country | null = null
  let nationalDigits = ''

  if (opts.countryCode) {
    const explicit = getCountryByCode(opts.countryCode, 'en')
    if (explicit) {
      country = explicit
      const digits = normalizePhoneDigits(value)
      const code = String(explicit.phone_code)
      if (digits.startsWith(code) && digits.length > code.length) {
        nationalDigits = digits.slice(code.length)
      } else {
        nationalDigits = digits
      }
    }
  }

  if (!country) {
    const parsed = parsePhoneNumberValue(value, getCountries('en'))
    country = parsed.country
    nationalDigits = normalizePhoneDigits(parsed.nationalNumber)
  }

  if (!country) {
    const digits = normalizePhoneDigits(value)
    if (!digits) return value
    const trimmed = value.trim()
    if (trimmed.startsWith('+') || trimmed.startsWith('00')) {
      return `+${digits}`
    }
    return value
  }

  const masked = applyMask(nationalDigits, getMaskForCountry(country))
  return `+${country.phone_code} ${masked}`.replace(/\s+/g, ' ').trim()
}
