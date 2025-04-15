import { computed } from 'vue'
import countriesData from '@/json/countries.json'
import { loadTranslations } from '@/utils/translations'
import type { Language, CountryType } from '@/interfaces'

export type Country = CountryType

export const useCountries = (lang: Language = 'ru') => {
  const translations = computed(() => loadTranslations())

  const getCountries = computed(() => {
    return countriesData.map(country => ({
      ...country,
      name: translations.value[lang].countries[country.country_code] || country.country_code
    }))
  })

  const getCountryByCode = (code: string) => {
    return getCountries.value.find(country => country.country_code.toLowerCase() === code.toLowerCase())
  }

  const getCountryByName = (name: string) => {
    return getCountries.value.find(country => country.country_code.toLowerCase() === name.toLowerCase())
  }

  const getCountryByPhoneCode = (phoneCode: number) => {
    return getCountries.value.find(country => country.phone_code === phoneCode)
  }

  const getFlagPath = (countryCode: string) => {
    return `/src/assets/flags/${countryCode}.svg`
  }

  return {
    getCountries,
    getCountryByCode,
    getCountryByName,
    getCountryByPhoneCode,
    getFlagPath
  }
}
