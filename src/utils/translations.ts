import type { Translations } from '../interfaces'

export const loadTranslations = (): Translations => {
  return Object.fromEntries(
    Object.entries(
      import.meta.glob<{ default: Record<string, any> }>('../lang/*.json', { eager: true })
    ).map(([key, value]: [string, { default: Record<string, any> }]) => {
      const lang = key.split('/').pop()?.replace('.json', '') || ''
      return [lang, value.default]
    })
  ) as Translations
}
