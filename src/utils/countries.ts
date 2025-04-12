import countriesData from '../json/countries.json'
import ru from '../lang/ru.json'
import en from '../lang/en.json'

export type Language = 'ru' | 'en'

export interface Country {
  country_code: string
  phone_code: number
}

interface Translations {
  [key: string]: {
    countries: {
      [key: string]: string
    }
  }
}

const translations: Translations = {
  ru,
  en
}

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
