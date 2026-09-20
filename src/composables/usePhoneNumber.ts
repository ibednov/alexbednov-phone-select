import { ref, computed, type MaybeRef } from 'vue'
import type { Language, Country } from '@/interfaces'
import { filterCountries, parsePhoneNumberValue } from '@/core/phoneNumber'
import { useCountries } from './useCountries'

export const usePhoneNumber = (
  lang: Language,
  favoritesCountries?: string[],
  hideFavorites: boolean = true,
  onlyCountries?: MaybeRef<string[] | undefined>
) => {
  const { getCountries, getCountryByCode } = useCountries(lang, onlyCountries)

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
    const hide =
      hideFavorites && Boolean(favoritesCountries?.length && favorites.value.length)

    return filterCountries(getCountries.value, searchQuery.value, {
      hideFavorites: hide,
      favoritesCountries
    })
  })

  const selectCountryByCode = (code: string) => {
    const country = getCountryByCode(code)
    if (!country) return false
    selectedCountry.value = country
    return true
  }

  const parsePhoneNumber = (value: string) => {
    const parsed = parsePhoneNumberValue(value, getCountries.value)
    if (!parsed.country) return
    selectedCountry.value = parsed.country
    inputValue.value = parsed.nationalNumber
  }

  return {
    searchQuery,
    selectedCountry,
    inputValue,
    favorites,
    filteredCountries,
    parsePhoneNumber,
    handleSearch,
    selectCountryByCode
  }
}
