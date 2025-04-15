import { ref, computed } from 'vue'
import { getCountries, getCountryByCode, type Country } from '@/utils/countries'
import type { Language } from '@/interfaces'

export const usePhoneNumber = (lang: Language, favoritesCountries?: string[]) => {
  const searchQuery = ref('')
  const selectedCountry = ref<Country | null>(null)
  const inputValue = ref('')

  const handleSearch = (value: string) => {
    searchQuery.value = value
  }

  const favorites = computed(() => {
    if (!favoritesCountries?.length) return []
    return favoritesCountries.map(code => getCountryByCode(code, lang))
  })

  const filteredCountries = computed(() => {
    const countries = getCountries(lang)
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

    const match = value.match(/^(\+\d+)(.*)$/)
    if (match) {
      const code = match[1]
      const number = match[2]
      const cleanCode = code.slice(1)

      if (cleanCode.startsWith('7')) {
        const firstDigit = cleanCode[1]
        if (firstDigit) {
          const digit = parseInt(firstDigit)
          if ([2, 3, 4, 5, 9].includes(digit)) {
            const country = getCountries(lang).find(c => c.country_code === 'RU')
            if (country) {
              selectedCountry.value = country
              inputValue.value = number
            }
          }
          if ([0, 6, 7].includes(digit)) {
            const country = getCountries(lang).find(c => c.country_code === 'KZ')
            if (country) {
              selectedCountry.value = country
              inputValue.value = number
            }
          }
        }
      } else {
        const country = getCountries(lang).find(c =>
          c.phone_code.toString().startsWith(cleanCode)
        )
        if (country) {
          selectedCountry.value = country
          inputValue.value = number
        }
      }
    }
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
