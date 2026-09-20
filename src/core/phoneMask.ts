import countriesMaskData from '@/json/countries_mask.json'
import type { Country } from '@/interfaces'
import type { CountryMask } from '@/types'

const defaultMasks: CountryMask[] = countriesMaskData

export const getMaskForCountry = (
  country: Pick<Country, 'phone_code'> | null,
  masks: CountryMask[] = defaultMasks
): string => {
  let matrix = '###############'

  if (country) {
    const mask = masks.find(item => {
      const code = item.code.replace(/[\s#]/g, '')
      return code.startsWith(`+${country.phone_code}`)
    })

    if (mask) {
      matrix = mask.code.replace(/^\+[\d\s]+/, '').trim()
    }
  }

  return matrix
}

export const applyMask = (value: string, matrix: string): string => {
  if (!value) return ''
  const maxDigits = (matrix.match(/[#\d]/g) || []).length
  const cleanValue = value.replace(/\D/g, '').slice(0, maxDigits)

  let i = 0
  return matrix.replace(/[#\d]/g, () => {
    return i < cleanValue.length ? cleanValue.charAt(i++) : ''
  })
}

export const formatPhoneInput = (
  value: string,
  country: Pick<Country, 'phone_code'> | null,
  masks: CountryMask[] = defaultMasks
): { cleanValue: string; maskedValue: string } => {
  const matrix = getMaskForCountry(country, masks)
  const maxDigits = (matrix.match(/[#\d]/g) || []).length
  const cleanValue = value.replace(/\D/g, '').slice(0, maxDigits)
  const maskedValue = cleanValue ? applyMask(cleanValue, matrix) : ''
  return { cleanValue, maskedValue }
}
