import { createI18n } from 'vue-i18n'
import { loadTranslations } from './translations'
import type { Language } from '../interfaces'

export const createI18nInstance = () => {
  const messages = loadTranslations()
  const availableLocales = Object.keys(messages) as Language[]

  return createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
    availableLocales
  })
}
