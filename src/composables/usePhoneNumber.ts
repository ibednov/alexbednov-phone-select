import { ref, computed } from 'vue'
import type { Language, Country } from '@/interfaces'
import { useCountries } from './useCountries'
import { useI18n } from './useI18n'

export const usePhoneNumber = (lang: Language, favoritesCountries?: string[]) => {
  const { getCountries, getCountryByCode } = useCountries(lang)
  const { t } = useI18n()

  const searchQuery = ref('')
  const selectedCountry = ref<Country | null>(null)
  const inputValue = ref('')

  const handleSearch = (value: string) => {
    searchQuery.value = value
  }

  const favorites = computed(() => {
    if (!favoritesCountries?.length) return []
    return favoritesCountries.map(code => getCountryByCode(code))
  })

  const filteredCountries = computed(() => {
    const countries = getCountries.value
    if (!searchQuery.value) return countries

    const query = searchQuery.value.toLowerCase()
    const filtered = countries.filter(country => {
      const name = country.name?.toLowerCase() || ''
      const phoneCode = country.phone_code?.toString() || ''
      return name.includes(query) || phoneCode.includes(query)
    })

    if (favoritesCountries?.length && favorites.value.length) {
      return filtered.filter(country => !favoritesCountries.includes(country.country_code.toLowerCase()))
    }

    return filtered
  })

  const parsePhoneNumber = (value: string) => {
    if (!value) {
      selectedCountry.value = null
      inputValue.value = ''
      return
    }

    const cleanValue = value.replace(/^\+/, '')
    const countries = getCountries.value

    const countryWithRanges = countries.find(c => {
      if (!c.phone_ranges?.length) return false
      const code = c.phone_code.toString()
      if (!cleanValue.startsWith(code)) return false

      const nextDigit = cleanValue[code.length]
      if (!nextDigit) return false

      return c.phone_ranges.includes(parseInt(nextDigit))
    })

    if (countryWithRanges) {
      selectedCountry.value = countryWithRanges
      inputValue.value = cleanValue.slice(countryWithRanges.phone_code.toString().length)
      return
    }

    const country = countries.find(c => cleanValue.startsWith(c.phone_code.toString()))

    if (country) {
      selectedCountry.value = country
      inputValue.value = cleanValue.slice(country.phone_code.toString().length)
      return
    }

    selectedCountry.value = null
    inputValue.value = ''
  }

  return {
    searchQuery,
    selectedCountry,
    inputValue,
    favorites,
    filteredCountries,
    parsePhoneNumber,
    handleSearch
  }
}
