<script setup lang="ts">
import { ref, watch, onMounted, computed, toRef, nextTick } from 'vue'
import type { Country, Language } from '@/interfaces'
import Input from '@/components/ui/input/Input.vue'
import Select from '@/components/ui/select/Select.vue'
import SelectContent from '@/components/ui/select/SelectContent.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import SelectTrigger from '@/components/ui/select/SelectTrigger.vue'
import SelectValue from '@/components/ui/select/SelectValue.vue'
import SelectSeparator from '@/components/ui/select/SelectSeparator.vue'
import { useTranslate } from '@/composables/useTranslate'
import { usePhoneNumber } from '@/composables/usePhoneNumber'
import { applyMask, getMaskForCountry } from '@/core/phoneMask'
import { cn } from '@/lib/utils'
import CountryItem from './PhoneSelect/CountryItem.vue'

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
    enableMask: false,
    disableCountryNameSelect: false,
    disableAutoParseNumber: true,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
  (e: 'update:country', value: Country): void
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
  handleSearch,
  selectCountryByCode
} = usePhoneNumber(
  props.lang,
  props.favoritesCountries,
  excludeFavoritesFromList.value,
  onlyCountriesRef
)

const phoneInput = ref<HTMLInputElement | null>(null)
const lastEmittedModelValue = ref<string | null>(null)
const pendingCaretDigits = ref<number | null>(null)
const inputMaxLength = computed(() => {
  if (!props.enableMask) return undefined
  return getMaskForCountry(selectedCountry.value).length
})

const hasModelValue = computed(() => {
  const value = props.modelValue
  return value !== null && value !== undefined && String(value).trim() !== ''
})

const getPhoneWithoutCode = (phone: string, code: string | number) => {
  if (!phone || code === undefined || code === null) return phone
  const codeStr = String(code)
  return phone.startsWith(`+${codeStr}`) ? phone.slice(`+${codeStr}`.length) : phone
}

const maskedPhone = computed(() => {
  if (!inputValue.value) return ''

  const phoneWithoutCode = selectedCountry.value
    ? getPhoneWithoutCode(inputValue.value, selectedCountry.value.phone_code)
    : inputValue.value

  return applyMask(phoneWithoutCode, getMaskForCountry(selectedCountry.value))
})

const handleInput = (value: string) => {
  if (props.enableMask) {
    const matrix = getMaskForCountry(selectedCountry.value)
    const maxDigits = (matrix.match(/[#\d]/g) || []).length
    const cleanValue = value.replace(/\D/g, '').slice(0, maxDigits)
    inputValue.value = cleanValue
  } else {
    inputValue.value = value
  }

  let phoneValue = value
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

  const caretDigits = pendingCaretDigits.value
  pendingCaretDigits.value = null
  if (props.enableMask && caretDigits !== null) {
    nextTick(() => {
      const input = phoneInput.value
      if (!input || document.activeElement !== input) return

      let digits = 0
      let position = maskedPhone.value.length
      for (let index = 0; index < maskedPhone.value.length; index++) {
        if (/\d/.test(maskedPhone.value[index])) digits++
        if (digits >= caretDigits) {
          position = index + 1
          break
        }
      }
      input.setSelectionRange(position, position)
    })
  }
}

const handleNativeInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const caret = input.selectionStart ?? input.value.length
  pendingCaretDigits.value = input.value.slice(0, caret).replace(/\D/g, '').length
  handleInput(input.value)
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

  const normalized = formatModelValue()
  if (normalized && normalized !== props.modelValue) {
    lastEmittedModelValue.value = normalized
    emit('update:modelValue', normalized)
  }
}

const applyDefaultCountry = () => {
  if (!props.defaultCountry || hasModelValue.value || selectedCountry.value) return
  selectCountryByCode(props.defaultCountry)
}

const handleCountrySelect = (country: Country) => {
  selectedCountry.value = country
  isOpen.value = false
  searchQuery.value = ''
  const nationalValue = props.enableMask ? maskedPhone.value : inputValue.value
  const value = nationalValue
    ? (props.enableMask
        ? `+${country.phone_code} ${nationalValue}`
        : `+${country.phone_code}${nationalValue}`)
    : ''
  lastEmittedModelValue.value = value
  emit('update:modelValue', value)
}

watch(() => props.modelValue, () => {
  if (props.modelValue === lastEmittedModelValue.value) return
  if (!props.disableAutoParseNumber) {
    initializePhone()
  }
}, { immediate: true })

watch(() => props.lang, (lang) => {
  setLanguage(lang)
}, { immediate: true })

watch(() => selectedCountry.value, emitCountry)

onMounted(() => {
  applyDefaultCountry()
})

</script>

<template>
  <div class="relative flex items-center gap-2 w-full">
    <Select
      v-model="selectedCountry"
      v-model:open="isOpen"
      @update:model-value="handleCountrySelect"
      :class="[props.selectClass || 'w-[180px]']"
    >
      <SelectTrigger :class="[props.selectTriggerClass]">
        <SelectValue :class="[props.selectValueClass]">
          <div class="flex items-center gap-2">
            <CountryItem v-if="selectedCountry" :country="selectedCountry"
            :disable-country-name-select="props.disableCountryNameSelect"
            :select-item-country-class="props.selectItemCountryClass"
             />
            <span v-else class="text-gray-400">
              {{ props.selectPlaceholder || t("phone-select.select-country") }}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent :class="[selectContentClass]">
        <div class="p-2 border-b" v-if="props.enableSearch">
          <Input
            v-model="searchQuery"
            @update:model-value="handleSearch"
            @keydown.stop
            type="text"
            :placeholder="t('phone-select.search')"
            class="w-full"
          />
        </div>
        <div class="max-h-60 overflow-y-auto overflow-x-hidden">
          <template v-if="props.favoritesCountries?.length && favorites.length">
            <div v-for="country in favorites" :key="country.country_code">
              <SelectItem :value="country" :class="[props.selectItemClass]">
                <CountryItem
                  :country="country"
                  :disable-country-name-select="props.disableCountryNameSelect"
                  :select-item-country-class="props.selectItemCountryClass"
                />
              </SelectItem>
            </div>
            <SelectSeparator />
          </template>
          <div v-for="country in filteredCountries" :key="country.country_code">
            <SelectItem :value="country" :class="[props.selectItemClass]">
              <CountryItem
                :country="country"
                :disable-country-name-select="props.disableCountryNameSelect"
                :select-item-country-class="props.selectItemCountryClass"
              />
            </SelectItem>
          </div>
        </div>
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
      @input="handleNativeInput"
      @keydown="handleKeydown"
      type="tel"
      inputmode="numeric"
      autocomplete="tel"
      :maxlength="inputMaxLength"
      :placeholder="props.inputPlaceholder || t('phone-select.placeholder')"
    />
  </div>
</template>
