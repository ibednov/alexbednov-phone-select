<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { Language } from '@/interfaces'
import { Input } from '@/components/shad-cn-ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/shad-cn-ui/select'
import { useI18n } from '@/composables/useI18n'
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
  }>(),
  {
    lang: 'en',
    hideFavorites: true,
    enableSearch: false,
    enableMask: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
  (e: 'update:country', value: Country): void
}>()

const emitCountry = () => {
  emit('update:country', selectedCountry.value)
}

const { setLanguage, t } = useI18n()

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

const applyMask = (value: string) => {
  if (!value) return ''
  const cleanValue = value.replace(/\D/g, '')
  let matrix = '###############'

  if (selectedCountry.value) {
    const mask = countriesMask.find(item => {
      const code = item.code.replace(/[\s#]/g, '')
      return code.startsWith(`+${selectedCountry.value.phone_code}`)
    })

    if (mask) {
      matrix = mask.code.replace(/^\+[\d\s]+/, '').trim()
    }
  }

  let i = 0
  return matrix.replace(/[#\d]/g, function(a) {
    return i < cleanValue.length ? cleanValue.charAt(i++) : ''
  })
}

const handleInput = (value: string) => {
  console.log('handleInput called with value:', value)
  if (props.enableMask) {
    // Получаем текущее значение без маски
    const currentValue = inputValue.value.replace(/\D/g, '')

    // Определяем, было ли это удаление
    const isDeletion = value.length < maskedPhone.value.length

    // Если это удаление, убираем последнюю цифру
    if (isDeletion) {
      const newValue = currentValue.slice(0, -1)
      inputValue.value = newValue
      maskedPhone.value = newValue ? applyMask(newValue) : ''
    } else {
      // Иначе добавляем новую цифру
      const cleanValue = value.replace(/\D/g, '')
      inputValue.value = cleanValue
      maskedPhone.value = cleanValue ? applyMask(cleanValue) : ''
    }
  } else {
    inputValue.value = value
    maskedPhone.value = value
  }

  if (selectedCountry.value) {
    const phoneValue = props.enableMask
      ? `+${selectedCountry.value.phone_code} ${maskedPhone.value}`
      : `+${selectedCountry.value.phone_code} ${value}`
    console.log('Emitting phone value:', phoneValue)
    emit('update:modelValue', phoneValue)
  } else {
    console.log('Emitting raw value:', value)
    emit('update:modelValue', value)
  }
}

// Обновляем maskedPhone при изменении inputValue или selectedCountry
watch([inputValue, selectedCountry], ([newInputValue, newSelectedCountry]) => {
  console.log('Updating maskedPhone with:', { newInputValue, newSelectedCountry })
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

const initializePhone = () => {
  console.log('initializePhone called with modelValue:', props.modelValue)
  if (props.modelValue) {
    // Убираем пробелы перед парсингом
    const cleanValue = props.modelValue.replace(/\s/g, '')
    console.log('Parsing phone number:', cleanValue)
    parsePhoneNumber(cleanValue)
    // Ждем следующего тика для установки selectedCountry
    setTimeout(() => {
      console.log('After timeout - selectedCountry:', selectedCountry.value)
      console.log('Current inputValue:', inputValue.value)
      if (selectedCountry.value) {
        const phoneWithoutCode = getPhoneWithoutCode(cleanValue, selectedCountry.value.phone_code)
        console.log('Setting inputValue to:', phoneWithoutCode)
        inputValue.value = phoneWithoutCode
        // Если маска отключена, обновляем maskedPhone напрямую
        if (!props.enableMask) {
          maskedPhone.value = phoneWithoutCode
        }
        // Обновляем modelValue с пробелом после кода страны
        const value = props.enableMask
          ? `+${selectedCountry.value.phone_code} ${maskedPhone.value}`
          : `+${selectedCountry.value.phone_code} ${inputValue.value}`
        emit('update:modelValue', value)
      }
    }, 0)
  }
}

const handleCountrySelect = (country: Country) => {
  console.log('handleCountrySelect called with country:', country)
  selectedCountry.value = country
  isOpen.value = false
  searchQuery.value = ''
  emit('update:country', country)
  const value = props.enableMask
    ? `+${country.phone_code} ${maskedPhone.value}`
    : `+${country.phone_code} ${inputValue.value}`
  console.log('Emitting phone value after country select:', value)
  emit('update:modelValue', value)
}

watch(() => props.modelValue, initializePhone, { immediate: true })

watch(() => props.lang, setLanguage)

watch(()=>selectedCountry.value, emitCountry())

onMounted(() => {
  setLanguage(props.lang)
  initializePhone()
})

</script>

<template>
  <div class="relative flex items-center gap-2 w-full">
    <Select
      v-model="selectedCountry"
      @update:model-value="handleCountrySelect"
      :class="[props.selectClass || 'w-[180px]']"
    >
      <SelectTrigger>
        <SelectValue>
          <div class="flex items-center gap-2">
            <CountryItem v-if="selectedCountry" :country="selectedCountry" />
            <span v-else class="text-gray-400">
              {{ props.selectPlaceholder || t("phone-select.select-country") }}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
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
        <div class="max-h-60 overflow-y-auto">
          <template v-if="props.favoritesCountries?.length && favorites.length">
            <div v-for="country in favorites" :key="country.country_code">
              <SelectItem :value="country">
                <CountryItem :country="country" />
              </SelectItem>
            </div>
            <SelectSeparator />
          </template>
          <div v-for="country in filteredCountries" :key="country.country_code">
            <SelectItem :value="country">
              <CountryItem :country="country" />
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
