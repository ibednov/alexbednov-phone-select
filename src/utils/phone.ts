import { type Country } from '@/utils/countries'

export function findCountryByCode(code: string, countries: Country[]): Country | null {
  // Убираем + если есть
  const cleanCode = code.startsWith('+') ? code.slice(1) : code

  // Ищем страну по коду
  return countries.find(country =>
    country.phone_code.toString().startsWith(cleanCode)
  ) || null
}

export function extractPhoneCode(value: string): { code: string; number: string } {
  const match = value.match(/^(\+\d+)(.*)$/)
  if (match) {
    return {
      code: match[1],
      number: match[2]
    }
  }
  return {
    code: '',
    number: value
  }
}
