/**
 * Proof script: formatPhoneNumber display helper.
 * Run: bun scripts/verify-format-phone.mjs
 * (loads built dist/core.es.js — run `bun run build` first if stale)
 */
import { formatPhoneNumber } from '../dist/core.es.js'

const cases = [
  {
    name: 'BY full intl digits',
    value: '+375291111111',
    opts: undefined,
    expect: '+375 29 111 11 11',
  },
  {
    name: 'BY with countryCode',
    value: '+375291111111',
    opts: { countryCode: 'by' },
    expect: '+375 29 111 11 11',
  },
  {
    name: 'BY national + countryCode',
    value: '291111111',
    opts: { countryCode: 'by' },
    expect: '+375 29 111 11 11',
  },
  {
    name: 'RU full intl digits',
    value: '+79001234567',
    opts: undefined,
    expect: '+7 900 123 45 67',
  },
  {
    name: 'RU with countryCode',
    value: '+79001234567',
    opts: { countryCode: 'ru' },
    expect: '+7 900 123 45 67',
  },
  {
    name: 'RU national + countryCode',
    value: '9001234567',
    opts: { countryCode: 'ru' },
    expect: '+7 900 123 45 67',
  },
]

let failed = 0
for (const c of cases) {
  const out = formatPhoneNumber(c.value, c.opts)
  if (out !== c.expect) {
    failed++
    console.log('FAIL', c.name, JSON.stringify(out), 'want', JSON.stringify(c.expect))
  } else {
    console.log('OK  ', c.name, '→', out)
  }
}

if (failed) {
  console.error(`\n${failed} case(s) failed`)
  process.exit(1)
}
console.log(`\nAll ${cases.length} cases passed`)
