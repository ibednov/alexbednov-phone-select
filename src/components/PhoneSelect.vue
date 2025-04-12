<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { getCountries, getCountryByCode, type Country } from '@/utils/countries'
import type { Language } from '@/interfaces'
import { useI18n } from 'vue-i18n'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { extractPhoneCode } from '@/utils/phone'

const { t } = useI18n()

const props = defineProps<{
  modelValue: string
  lang?: Language
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)
const searchQuery = ref('')
const selectedCountry = ref<Country | null>(null)
const inputValue = ref('')

const filteredCountries = computed(() => {
  return getCountries(props.lang).filter(country =>
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    country.phone_code.toString().includes(searchQuery.value)
  )
})

const handleCountrySelect = (country: Country) => {
  selectedCountry.value = country
  isOpen.value = false
  searchQuery.value = ''
  emit('update:modelValue', `+${country.phone_code}${inputValue.value}`)
}

const handleInput = (value: string) => {
  inputValue.value = value
  if (selectedCountry.value) {
    emit('update:modelValue', `+${selectedCountry.value.phone_code}${value}`)
  } else {
    emit('update:modelValue', value)
  }
}

// При изменении modelValue извне
watch(() => props.modelValue, (newValue) => {
  const { code, number } = extractPhoneCode(newValue)
  if (code) {
    const country = getCountries(props.lang).find(c =>
      `+${c.phone_code}` === code
    )
    if (country) {
      selectedCountry.value = country
      inputValue.value = number
    }
  }
}, { immediate: true })
</script>

<template>
  <div class="relative flex items-center gap-2">
    <Select
      v-model="selectedCountry"
      @update:model-value="handleCountrySelect"
    >
      <SelectTrigger class="w-[180px]">
        <SelectValue>
          <div class="flex items-center gap-2">
            <img
              v-if="selectedCountry"
              :src="`/src/assets/flags/${selectedCountry.country_code}.svg`"
              :alt="selectedCountry.country_code"
              class="w-6 h-4"
            >
            <span v-if="selectedCountry">+{{ selectedCountry.phone_code }}</span>
            <span v-else class="text-gray-400">{{ t('phone-select.select-country') }}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <div class="p-2 border-b">
          <Input
            v-model="searchQuery"
            type="text"
            :placeholder="t('phone-select.search')"
            class="w-full"
          />
        </div>
        <div class="max-h-60 overflow-y-auto">
          <SelectItem
            v-for="country in filteredCountries"
            :key="country.country_code"
            :value="country"
          >
            <div class="flex items-center gap-2">
              <img
                :src="`/src/assets/flags/${country.country_code}.svg`"
                :alt="country.country_code"
                class="w-6 h-4"
              >
              <span>{{ country.name }}</span>
              <span class="text-gray-500">+{{ country.phone_code }}</span>
            </div>
          </SelectItem>
        </div>
      </SelectContent>
    </Select>

    <Input
      v-model="inputValue"
      @update:model-value="handleInput"
      type="tel"
      :placeholder="t('phone-select.placeholder')"
    />
  </div>
</template>
