/**
 * Proof script: stripLeadingCallingCode + mask path for paste of full intl numbers.
 * Run: bun scripts/verify-strip-country-code.mjs
 * (loads built dist/core.es.js — run `bun run build` first if stale)
 */
import {
  getCountries,
  getCountryByCode,
  getMaskForCountry,
  applyMask,
  stripLeadingCallingCode,
  parsePhoneNumberValue,
} from '../dist/core.es.js'

const countries = getCountries('en')
const by = getCountryByCode('by', 'en')
const ru = getCountryByCode('ru', 'en')
const us = getCountryByCode('us', 'en')
const az = getCountryByCode('az', 'en')

function maxNational(country) {
  const matrix = getMaskForCountry(country)
  return (matrix.match(/[#\d]/g) || []).length
}

function simulateInput(raw, selected, { enableMask = true } = {}) {
  const maxHint = maxNational(selected)
  const result = stripLeadingCallingCode(raw, {
    selectedCountry: selected,
    countries,
    maxNationalDigits: maxHint,
  })
  const country = result.country || selected
  const max = maxNational(country)
  const nationalDigits = result.stripped
    ? result.nationalDigits
    : raw.replace(/\D/g, '')
  const clipped = nationalDigits.slice(0, max)
  const masked = enableMask ? applyMask(clipped, getMaskForCountry(country)) : clipped
  const model = clipped
    ? enableMask
      ? `+${country.phone_code} ${masked}`
      : `+${country.phone_code}${clipped}`
    : ''
  return { result, nationalDigits: clipped, masked, model, country: country.country_code }
}

const cases = [
  {
    name: 'BY paste +375291111111',
    raw: '+375291111111',
    selected: by,
    expectNational: '291111111',
    expectMasked: '29 111 11 11',
    expectStripped: true,
  },
  {
    name: 'BY paste formatted +375 29 111-11-11',
    raw: '+375 29 111-11-11',
    selected: by,
    expectNational: '291111111',
    expectMasked: '29 111 11 11',
    expectStripped: true,
  },
  {
    name: 'BY paste bare 375291111111 (no +)',
    raw: '375291111111',
    selected: by,
    expectNational: '291111111',
    expectMasked: '29 111 11 11',
    expectStripped: true,
  },
  {
    name: 'BY paste 00375291111111',
    raw: '00375291111111',
    selected: by,
    expectNational: '291111111',
    expectMasked: '29 111 11 11',
    expectStripped: true,
  },
  {
    name: 'BY already-national 291111111',
    raw: '291111111',
    selected: by,
    expectNational: '291111111',
    expectMasked: '29 111 11 11',
    expectStripped: false,
  },
  {
    name: 'BY partial code typing 375 (no strip)',
    raw: '375',
    selected: by,
    expectNational: '375',
    expectStripped: false,
  },
  {
    name: 'RU paste +79161234567',
    raw: '+79161234567',
    selected: ru,
    expectNational: '9161234567',
    expectStripped: true,
  },
  {
    name: 'US paste +12025551234',
    raw: '+12025551234',
    selected: us,
    expectNational: '2025551234',
    expectStripped: true,
  },
  {
    name: 'AZ paste +994501112233',
    raw: '+994501112233',
    selected: az,
    expectNational: '501112233',
    expectStripped: true,
  },
  {
    name: 'BY selected, paste +79161234567 (explicit → switch RU)',
    raw: '+79161234567',
    selected: by,
    expectNational: '9161234567',
    expectCountry: 'RU',
    expectStripped: true,
  },
  {
    name: 'BY selected, bare RU digits no strip (mismatch, not explicit)',
    raw: '79161234567',
    selected: by,
    expectStripped: false,
  },
]

let failed = 0
for (const c of cases) {
  const out = simulateInput(c.raw, c.selected)
  const errors = []
  if (c.expectStripped != null && out.result.stripped !== c.expectStripped) {
    errors.push(`stripped=${out.result.stripped} want ${c.expectStripped}`)
  }
  if (c.expectNational != null && out.nationalDigits !== c.expectNational) {
    errors.push(`national=${out.nationalDigits} want ${c.expectNational}`)
  }
  if (c.expectMasked != null && out.masked !== c.expectMasked) {
    errors.push(`masked=${JSON.stringify(out.masked)} want ${JSON.stringify(c.expectMasked)}`)
  }
  if (c.expectCountry != null && out.country !== c.expectCountry) {
    errors.push(`country=${out.country} want ${c.expectCountry}`)
  }
  if (errors.length) {
    failed++
    console.log('FAIL', c.name, errors.join('; '), out)
  } else {
    console.log('OK  ', c.name, '→', out.masked || out.nationalDigits, out.model)
  }
}

// Bug reproduction without strip (old path)
{
  const raw = '+375291111111'
  const max = maxNational(by)
  const digits = raw.replace(/\D/g, '').slice(0, max)
  const masked = applyMask(digits, getMaskForCountry(by))
  console.log('\nLegacy (no strip) paste +375291111111 →', JSON.stringify(masked), '(bug)')
}

// parsePhoneNumberValue sanity
{
  const p = parsePhoneNumberValue('+375291111111', countries)
  console.log('parsePhoneNumberValue +375291111111 →', p.country?.country_code, p.nationalNumber)
}

if (failed) {
  console.error(`\n${failed} case(s) failed`)
  process.exit(1)
}
console.log(`\nAll ${cases.length} cases passed`)
