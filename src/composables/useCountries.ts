import { computed, toValue, type MaybeRef } from 'vue'
import {
  getCountries as getCountriesCore,
  getCountryByCode as getCountryByCodeCore,
  getCountryByName as getCountryByNameCore,
  getCountryByPhoneCode as getCountryByPhoneCodeCore,
  getFlagPath as getFlagPathCore,
  getAllCountryNames as getAllCountryNamesCore
} from '@/core/countries'
import type { Language } from '@/interfaces'

export const useCountries = (
  lang: MaybeRef<Language> = 'ru',
  onlyCountries?: MaybeRef<string[] | undefined>
) => {
  const resolveOnlyCountries = () => toValue(onlyCountries)

  const resolveLanguage = () => toValue(lang)
  const getCountries = computed(() => getCountriesCore(resolveLanguage(), resolveOnlyCountries()))

  const getCountryByCode = (code: string) =>
    getCountryByCodeCore(code, resolveLanguage(), resolveOnlyCountries())

  const getCountryByName = (name: string) =>
    getCountryByNameCore(name, resolveLanguage(), resolveOnlyCountries())

  const getCountryByPhoneCode = (phoneCode: number) =>
    getCountryByPhoneCodeCore(phoneCode, resolveLanguage(), resolveOnlyCountries())

  const getFlagPath = (countryCode: string) => getFlagPathCore(countryCode)

  const getAllCountryNames = (countryCode: string) => getAllCountryNamesCore(countryCode)

  return {
    getCountries,
    getCountryByCode,
    getCountryByName,
    getCountryByPhoneCode,
    getFlagPath,
    getAllCountryNames
  }
}
