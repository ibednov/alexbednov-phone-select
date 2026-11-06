<script setup lang="ts">
import { ref, watch, onMounted, computed, toRef, nextTick } from 'vue'
import type { Country, Language } from '@/interfaces'
import Select from '@/components/ui/select/Select.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import { useTranslate } from '@/composables/useTranslate'
import { usePhoneNumber } from '@/composables/usePhoneNumber'
import { applyMask, getMaskForCountry } from '@/core/phoneMask'
import { stripLeadingCallingCode } from '@/core/phoneNumber'
import { getCountries } from '@/core/countries'
import { cn } from '@/lib/utils'
import CountryItem from './PhoneSelect/CountryItem.vue'
import CountryList from './PhoneSelect/CountryList.vue'

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    lang?: Language
    favoritesCountries?: string[]
    onlyCountries?: string[]
    defaultCountry?: string
    hideFavorites?: boolean
    /** Exclude favorites from the main list (no duplicates). Alias of hideFavorites; prefer this name. */
    dedupeFavorites?: boolean
    enableSearch?: boolean
    enableMask?: boolean
    selectClass?: string
    inputClass?: string
    selectPlaceholder?: string
    inputPlaceholder?: string
    disableCountryNameSelect?: boolean
    disableAutoParseNumber?: boolean
    /**
     * When true, paste/input of a full international number into the national field strips the
     * leading calling code if it matches the selected country (or a detected country on explicit `+`/`00`).
     * Default true — national field is digits-only and expects a local number; set false to keep legacy paste.
     */
    stripCountryCode?: boolean
    /**
     * Keep only phone digits in the national field (letters/symbols dropped). Leading + / 00 still
     * participate in stripCountryCode detection before digit filtering. Default true.
     */
    digitsOnly?: boolean
    selectContentClass?: string
    selectTriggerClass?: string
    selectValueClass?: string
    selectItemClass?: string
    selectItemCountryClass?: string
  }>(),
  {
    lang: 'en',
    hideFavorites: true,
    dedupeFavorites: true,
    enableSearch: false,
    // Default on: national length is always country-bounded; formatting spaces follow mask.
    enableMask: true,
    disableCountryNameSelect: false,
    disableAutoParseNumber: true,
    stripCountryCode: true,
    digitsOnly: true,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
  (e: 'update:country', value: Country): void
  (e: 'input-overflow', value: { receivedDigits: number, maxDigits: number }): void
}>()

const emitCountry = () => {
  if (selectedCountry.value) {
    emit('update:country', selectedCountry.value)
  }
}

const { setLanguage, t } = useTranslate()

const isOpen = ref(false)
const onlyCountriesRef = toRef(props, 'onlyCountries')
const excludeFavoritesFromList = computed(
  () => props.dedupeFavorites ?? props.hideFavorites
)
const {
  searchQuery,
  selectedCountry,
  inputValue,
  favorites,
  filteredCountries,
  parsePhoneNumber,
  selectCountryByCode
} = usePhoneNumber(
  toRef(props, 'lang'),
  props.favoritesCountries,
  excludeFavoritesFromList.value,
  onlyCountriesRef
)

const phoneInput = ref<HTMLInputElement | null>(null)
const lastEmittedModelValue = ref<string | null>(null)
const pendingCaretDigits = ref<number | null>(null)

const hasModelValue = computed(() => {
  const value = props.modelValue
  return value !== null && value !== undefined && String(value).trim() !== ''
})

const getPhoneWithoutCode = (phone: string, code: string | number) => {
  if (!phone || code === undefined || code === null) return phone
  const codeStr = String(code)
  // Only strip explicit +callingCode form; bare-digit calling codes are handled by
  // stripCountryCode / stripLeadingCallingCode (safe against NANP area codes starting with 1).
  return phone.startsWith(`+${codeStr}`) ? phone.slice(`+${codeStr}`.length) : phone
}

/** National length from mask metadata (used for strip heuristics even when enableMask is false). */
const nationalMaxDigits = (): number | undefined => {
  const matrix = getMaskForCountry(selectedCountry.value)
  const n = (matrix.match(/[#\d]/g) || []).length
  return n > 0 ? n : undefined
}

const maskedPhone = computed(() => {
  if (!inputValue.value) return ''

  const phoneWithoutCode = selectedCountry.value
    ? getPhoneWithoutCode(inputValue.value, selectedCountry.value.phone_code)
    : inputValue.value

  return applyMask(phoneWithoutCode, getMaskForCountry(selectedCountry.value))
})

const handleInput = (value: string) => {
  let working = value
  let strippedCallingCode = false

  if (props.stripCountryCode) {
    const result = stripLeadingCallingCode(working, {
      selectedCountry: selectedCountry.value,
      countries: getCountries(props.lang, props.onlyCountries),
      maxNationalDigits: nationalMaxDigits(),
    })
    if (result.stripped) {
      working = result.nationalDigits
      strippedCallingCode = true
      if (result.country) {
        selectedCountry.value = result.country
      }
      // After stripping a full intl paste, place caret at end of national digits.
      pendingCaretDigits.value = result.nationalDigits.length
    }
  }

  // National field: drop letters/symbols. Strip already saw original +/00 form above.
  if (props.digitsOnly || props.enableMask || strippedCallingCode) {
    working = working.replace(/\D/g, '')
  }

  // Always hard-cap national length from country mask (even if enableMask is off —
  // otherwise paste/type can leave unlimited digits in the DOM).
  const matrix = getMaskForCountry(selectedCountry.value)
  const maxDigits = (matrix.match(/[#\d]/g) || []).length
  let overflow: { receivedDigits: number, maxDigits: number } | undefined
  const digitsOnlyWorking = working.replace(/\D/g, '')
  if (maxDigits > 0 && digitsOnlyWorking.length > maxDigits) {
    overflow = { receivedDigits: digitsOnlyWorking.length, maxDigits }
  }
  if (maxDigits > 0) {
    inputValue.value = digitsOnlyWorking.slice(0, maxDigits)
  } else if (props.digitsOnly || strippedCallingCode || props.enableMask) {
    inputValue.value = digitsOnlyWorking
  } else {
    inputValue.value = working
  }

  let phoneValue = ''
  if (selectedCountry.value) {
    const nationalValue = props.enableMask ? maskedPhone.value : inputValue.value
    phoneValue = nationalValue
      ? (props.enableMask
          ? `+${selectedCountry.value.phone_code} ${nationalValue}`
          : `+${selectedCountry.value.phone_code}${nationalValue}`)
      : ''
  }

  lastEmittedModelValue.value = phoneValue
  emit('update:modelValue', phoneValue)
  if (overflow) emit('input-overflow', overflow)

  // Native <input> already painted the keystroke. If the clipped/masked value is
  // unchanged vs previous render, Vue skips :value update and the extra digit sticks
  // in the DOM (e.g. BY 10th digit while mask max is 9). Always write the display value.
  const displayValue = props.enableMask ? maskedPhone.value : inputValue.value
  const syncDomValue = () => {
    const input = phoneInput.value
    if (!input) return
    if (input.value !== displayValue) {
      input.value = displayValue
    }
  }
  syncDomValue()

  const caretDigits = pendingCaretDigits.value
  pendingCaretDigits.value = null
  if (caretDigits !== null) {
    nextTick(() => {
      const input = phoneInput.value
      if (!input || document.activeElement !== input) return
      syncDomValue()

      const display = props.enableMask ? maskedPhone.value : inputValue.value
      const cappedCaret = Math.min(
        caretDigits,
        (inputValue.value || '').replace(/\D/g, '').length,
      )
      if (!props.enableMask) {
        input.setSelectionRange(cappedCaret, cappedCaret)
        return
      }
      let digits = 0
      let position = display.length
      for (let index = 0; index < display.length; index++) {
        if (/\d/.test(display[index])) digits++
        if (digits >= cappedCaret) {
          position = index + 1
          break
        }
      }
      input.setSelectionRange(position, position)
    })
  } else {
    nextTick(syncDomValue)
  }
}

const handleNativeInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const caret = input.selectionStart ?? input.value.length
  pendingCaretDigits.value = input.value.slice(0, caret).replace(/\D/g, '').length
  handleInput(input.value)
}

/** Block insert before the browser paints past national max (mask hard-cut). */
const handleBeforeInput = (event: InputEvent) => {
  if (event.isComposing) return
  if (event.inputType && !event.inputType.startsWith('insert')) return
  const input = event.target as HTMLInputElement
  if (!input) return
  const maxDigits = nationalMaxDigits()
  if (!maxDigits) return
  const selectionLen = Math.abs((input.selectionEnd ?? 0) - (input.selectionStart ?? 0))
  const currentDigits = input.value.replace(/\D/g, '').length - selectionLen
  if (currentDigits >= maxDigits) {
    // Allow only if replacing selected text that frees slots — selection already subtracted.
    const incoming = (event.data ?? '').replace(/\D/g, '').length
    if (incoming > 0 && currentDigits + incoming > maxDigits && selectionLen === 0) {
      event.preventDefault()
    } else if (selectionLen === 0 && currentDigits >= maxDigits) {
      event.preventDefault()
    }
  }
}

const handlePaste = (event: ClipboardEvent) => {
  const text = event.clipboardData?.getData('text') ?? ''
  if (!text) return
  event.preventDefault()
  pendingCaretDigits.value = null
  handleInput(text)
}

const handleKeydown = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement
  if (input.selectionStart !== input.selectionEnd) return

  if (event.key === 'Backspace' && input.selectionStart && /\D/.test(input.value[input.selectionStart - 1])) {
    event.preventDefault()
    input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1)
  }

  if (event.key === 'Delete' && input.selectionStart !== null && /\D/.test(input.value[input.selectionStart] || '')) {
    event.preventDefault()
    input.setSelectionRange(input.selectionStart + 1, input.selectionStart + 1)
  }

  // Block digit keys past national max (backup if beforeinput is skipped).
  const maxDigits = nationalMaxDigits()
  if (
    maxDigits
    && event.key.length === 1
    && /\d/.test(event.key)
    && input.selectionStart === input.selectionEnd
  ) {
    const currentDigits = input.value.replace(/\D/g, '').length
    if (currentDigits >= maxDigits) {
      event.preventDefault()
    }
  }
}

const formatModelValue = () => {
  if (!selectedCountry.value) return props.modelValue

  const nationalValue = props.enableMask ? maskedPhone.value : inputValue.value
  if (!nationalValue) return ''
  return props.enableMask
    ? `+${selectedCountry.value.phone_code} ${nationalValue}`
    : `+${selectedCountry.value.phone_code}${nationalValue}`
}

const initializePhone = () => {
  if (props.disableAutoParseNumber) return
  if (!hasModelValue.value) return

  const cleanValue = props.modelValue!.replace(/\s/g, '')
  parsePhoneNumber(cleanValue)

  if (!selectedCountry.value) return

  // Clip national digits to mask after external parse (long stored numbers).
  const maxDigits = nationalMaxDigits()
  if (maxDigits && inputValue.value) {
    const digits = String(inputValue.value).replace(/\D/g, '')
    if (digits.length > maxDigits) {
      inputValue.value = digits.slice(0, maxDigits)
    } else {
      inputValue.value = digits
    }
  }

  const normalized = formatModelValue()
  if (normalized && normalized !== props.modelValue) {
    lastEmittedModelValue.value = normalized
    emit('update:modelValue', normalized)
  }
}

const applyDefaultCountry = () => {
  if (!props.defaultCountry || selectedCountry.value) return
  selectCountryByCode(props.defaultCountry)
}

const handleCountrySelect = (value: Country | string | null) => {
  const country = typeof value === 'string'
    ? (getCountries(props.lang, props.onlyCountries).find(
        c => c.country_code.toLowerCase() === value.toLowerCase()
      ) ?? null)
    : value

  if (!country) return

  selectedCountry.value = country
  isOpen.value = false
  searchQuery.value = ''
  const nationalValue = props.enableMask ? maskedPhone.value : inputValue.value
  const phone = nationalValue
    ? (props.enableMask
        ? `+${country.phone_code} ${nationalValue}`
        : `+${country.phone_code}${nationalValue}`)
    : ''
  lastEmittedModelValue.value = phone
  emit('update:modelValue', phone)
}

/** Stable select model: country_code string (object identity breaks reka-ui Select). */
const selectedCountryCode = computed(() => selectedCountry.value?.country_code)

/** Full mask string length (digits + separators) — blocks typing past national max. */
const nationalInputMaxLength = computed(() => {
  const matrix = getMaskForCountry(selectedCountry.value)
  return matrix.length > 0 ? matrix.length : undefined
})

watch(() => props.modelValue, () => {
  if (props.modelValue === lastEmittedModelValue.value) return
  if (!props.disableAutoParseNumber) {
    initializePhone()
  }
  // After external model parse, still ensure default country if nothing selected.
  if (!selectedCountry.value) applyDefaultCountry()
}, { immediate: true })

watch(() => props.lang, (lang) => {
  setLanguage(lang)
  if (selectedCountry.value) {
    selectCountryByCode(selectedCountry.value.country_code)
  }
}, { immediate: true })

watch(() => props.defaultCountry, () => {
  applyDefaultCountry()
}, { immediate: true })

watch(() => selectedCountry.value, emitCountry)

onMounted(() => {
  applyDefaultCountry()
})

</script>

<template>
  <div class="relative flex items-center gap-2 w-full">
    <Select
      :model-value="selectedCountryCode"
      v-model:open="isOpen"
      @update:model-value="handleCountrySelect"
      :class="[props.selectClass || 'w-[180px]']"
    >
      <SelectTrigger :class="[props.selectTriggerClass]">
        <SelectValue
          :class="[props.selectValueClass]"
          :placeholder="selectedCountry
            ? undefined
            : (props.selectPlaceholder ?? t('phone-select.select-country'))"
        >
          <div
            v-if="selectedCountry"
            class="flex items-center gap-2"
          >
            <CountryItem
              :country="selectedCountry"
              :disable-country-name-select="props.disableCountryNameSelect"
              :select-item-country-class="props.selectItemCountryClass"
            />
          </div>
          <span
            v-else
            class="text-muted-foreground"
          >
            {{ props.selectPlaceholder ?? t('phone-select.select-country') }}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent :class="[selectContentClass]">
        <CountryList
          v-model:search-query="searchQuery"
          :favorites="favorites"
          :filtered-countries="filteredCountries"
          :has-favorites="Boolean(props.favoritesCountries?.length)"
          :enable-search="props.enableSearch"
          :search-placeholder="t('phone-select.search')"
          :disable-country-name-select="props.disableCountryNameSelect"
          :select-item-class="props.selectItemClass"
          :select-item-country-class="props.selectItemCountryClass"
        />
      </SelectContent>
    </Select>

    <input
      ref="phoneInput"
      data-slot="input"
      :class="cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        props.inputClass,
        'flex-1',
      )"
      :value="props.enableMask ? maskedPhone : inputValue"
      :maxlength="nationalInputMaxLength"
      @beforeinput="handleBeforeInput"
      @input="handleNativeInput"
      @paste="handlePaste"
      @keydown="handleKeydown"
      type="tel"
      inputmode="numeric"
      autocomplete="tel"
      :placeholder="props.inputPlaceholder || t('phone-select.placeholder')"
    />
  </div>
</template>
