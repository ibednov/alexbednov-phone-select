import { ref } from 'vue'
import type { Language } from '@/interfaces'
import { loadTranslations } from '@/utils/translations'

const translations = ref(loadTranslations())

export const useTranslate = () => {
  const currentLang = ref<Language>('ru')

  const setLanguage = (lang: Language | undefined) => {
    if (lang && ['ru', 'en', 'az', 'be'].includes(lang)) {
      currentLang.value = lang
    }
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations.value[currentLang.value]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }

  return {
    currentLang,
    setLanguage,
    t
  }
}
