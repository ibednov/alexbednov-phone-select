import countriesData from '../json/countries.json'
import { loadTranslations } from './translations'
import type { Language, Country, Translations } from '../interfaces'

const translations = loadTranslations()

export const getCountries = (lang: Language = 'ru'): Country[] => {
  return countriesData.map(country => ({
    ...country,
    name: translations[lang].countries[country.country_code] || country.country_code
  }))
}

export const getCountryByCode = (code: string, lang: Language = 'ru'): Country | undefined => {
  return getCountries(lang).find(country => country.country_code.toLowerCase() === code.toLowerCase())
}

export const getCountryByName = (name: string, lang: Language = 'ru'): Country | undefined => {
  return getCountries(lang).find(country => country.country_code.toLowerCase() === name.toLowerCase())
}

export const getCountryByPhoneCode = (phoneCode: number, lang: Language = 'ru'): Country | undefined => {
  return getCountries(lang).find(country => country.phone_code === phoneCode)
}

export const getFlagPath = (countryCode: string): string => {
  return `/src/assets/flags/${countryCode}.svg`
}
