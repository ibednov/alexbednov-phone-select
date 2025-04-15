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
    console.log('parsePhoneNumber', value)
    if (!value) {
      selectedCountry.value = null
      inputValue.value = ''
      return
    }

    // Убираем + из начала строки
    const cleanValue = value.replace(/^\+/, '')

    // Ищем код страны в списке стран
    const countries = getCountries(lang)

    // Сначала проверяем страны с phone_ranges
    const countryWithRanges = countries.find(c => {
      if (!c.phone_ranges?.length) return false
      const code = c.phone_code.toString()
      if (!cleanValue.startsWith(code)) return false

      const nextDigit = cleanValue[code.length]
      if (!nextDigit) return false

      return c.phone_ranges.includes(parseInt(nextDigit))
    })

    if (countryWithRanges) {
      console.log('found country with ranges', countryWithRanges)
      selectedCountry.value = countryWithRanges
      inputValue.value = cleanValue.slice(countryWithRanges.phone_code.toString().length)
      return
    }

    // Если не нашли по ranges, ищем обычным способом
    const country = countries.find(c => cleanValue.startsWith(c.phone_code.toString()))

    if (country) {
      console.log('found country', country)
      selectedCountry.value = country
      inputValue.value = cleanValue.slice(country.phone_code.toString().length)
      return
    }

    // Если страна не найдена, сбрасываем значения
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
