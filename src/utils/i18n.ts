import { loadTranslations } from '@/utils/translations'
import type { Language } from '@/interfaces'

let currentLang: Language = 'ru'
let translations = loadTranslations()

export const setLanguage = (lang: Language | undefined) => {
  if (lang && ['ru', 'en', 'az', 'be'].includes(lang)) {
    currentLang = lang
  }
}

export const t = (key: string) => {
  const keys = key.split('.')
  let value: any = translations[currentLang]

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key
    }
  }

  return value || key
}
