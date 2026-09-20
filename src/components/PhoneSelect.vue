<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
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
import { usePhoneMask } from '@/composables/usePhoneMask'
import CountryItem from './PhoneSelect/CountryItem.vue'
import type { CountryMask } from '@/types'
import countriesMaskData from '@/json/countries_mask.json'

const countriesMask: CountryMask[] = countriesMaskData

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    lang?: Language
    favoritesCountries?: string[]
    hideFavorites?: boolean
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
    enableSearch: false,
    enableMask: false,
    disableCountryNameSelect: false,
    disableAutoParseNumber: false,
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
const {
  searchQuery,
  selectedCountry,
  inputValue,
  favorites,
  filteredCountries,
  parsePhoneNumber,
  handleSearch
} = usePhoneNumber(props.lang, props.favoritesCountries, props.hideFavorites)

const { maskedPhone } = usePhoneMask()

const getPhoneWithoutCode = (phone: string, code: string) => {
  if (!phone || !code) return phone
  return phone.startsWith(`+${code}`) ? phone.slice(`+${code}`.length) : phone
}

const getMaskMatrix = () => {
  let matrix = '###############'

  if (selectedCountry.value) {
    const mask = countriesMask.find(item => {
      const code = item.code.replace(/[\s#]/g, '')
      return code.startsWith(`+${selectedCountry.value!.phone_code}`)
    })

    if (mask) {
      matrix = mask.code.replace(/^\+[\d\s]+/, '').trim()
    }
  }

  return matrix
}

const applyMask = (value: string) => {
  if (!value) return ''
  const matrix = getMaskMatrix()
  const maxDigits = (matrix.match(/[#\d]/g) || []).length
  const cleanValue = value.replace(/\D/g, '').slice(0, maxDigits)

  let i = 0
  return matrix.replace(/[#\d]/g, () => {
    return i < cleanValue.length ? cleanValue.charAt(i++) : ''
  })
}

const handleInput = (value: string) => {
  if (props.enableMask) {
    const matrix = getMaskMatrix()
    const maxDigits = (matrix.match(/[#\d]/g) || []).length
    const cleanValue = value.replace(/\D/g, '').slice(0, maxDigits)
    inputValue.value = cleanValue
    maskedPhone.value = cleanValue ? applyMask(cleanValue) : ''
  } else {
    inputValue.value = value
    maskedPhone.value = value
  }

  if (selectedCountry.value) {
    const phoneValue = props.enableMask
      ? `+${selectedCountry.value.phone_code} ${maskedPhone.value}`
      : `+${selectedCountry.value.phone_code}${inputValue.value}`
    emit('update:modelValue', phoneValue)
  } else {
    emit('update:modelValue', value)
  }
}

watch([inputValue, selectedCountry], ([newInputValue, newSelectedCountry]) => {
  if (newSelectedCountry) {
    const phoneWithoutCode = getPhoneWithoutCode(
      newInputValue,
      newSelectedCountry.phone_code
    )
    maskedPhone.value = phoneWithoutCode ? applyMask(phoneWithoutCode) : ''
  } else {
    maskedPhone.value = newInputValue ? applyMask(newInputValue) : ''
  }
}, { immediate: true })

const formatModelValue = () => {
  if (!selectedCountry.value) return props.modelValue

  return props.enableMask
    ? `+${selectedCountry.value.phone_code} ${maskedPhone.value}`
    : `+${selectedCountry.value.phone_code}${inputValue.value}`
}

const initializePhone = () => {
  if (props.disableAutoParseNumber) return

  if (!props.modelValue) return

  const cleanValue = props.modelValue.replace(/\s/g, '')
  parsePhoneNumber(cleanValue)

  if (!selectedCountry.value) return

  const normalized = formatModelValue()
  if (normalized && normalized !== props.modelValue) {
    emit('update:modelValue', normalized)
  }
}

const handleCountrySelect = (country: Country) => {
  selectedCountry.value = country
  isOpen.value = false
  searchQuery.value = ''
  const value = props.enableMask
    ? `+${country.phone_code} ${maskedPhone.value}`
    : `+${country.phone_code}${inputValue.value}`
  emit('update:modelValue', value)
}

watch(() => props.modelValue, () => {
  if (!props.disableAutoParseNumber) {
    initializePhone()
  }
}, { immediate: true })

watch(() => props.lang, setLanguage)

watch(() => selectedCountry.value, emitCountry)

onMounted(() => {
  setLanguage(props.lang)
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
                <CountryItem :country="country" :select-item-country-class="props.selectItemCountryClass" />
              </SelectItem>
            </div>
            <SelectSeparator />
          </template>
          <div v-for="country in filteredCountries" :key="country.country_code">
            <SelectItem :value="country" :class="[props.selectItemClass]">
              <CountryItem :country="country" :select-item-country-class="props.selectItemCountryClass" />
            </SelectItem>
          </div>
        </div>
      </SelectContent>
    </Select>

    <Input
      :class="[props.inputClass, 'flex-1']"
      :value="props.enableMask ? maskedPhone : inputValue"
      @update:model-value="handleInput"
      type="tel"
      :placeholder="props.inputPlaceholder || t('phone-select.placeholder')"
    />
  </div>
</template>
