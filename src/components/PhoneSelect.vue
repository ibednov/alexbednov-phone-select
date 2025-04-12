<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { getCountries, getCountryByCode, type Country } from '@/utils/countries'
import type { Language } from '@/interfaces'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/ui/select'
import { extractPhoneCode } from '@/utils/phone'
import { t, setLanguage } from '@/utils/i18n'

const props = defineProps<{
  modelValue: string
  lang?: Language
  favoritesCountries?: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Устанавливаем язык
onMounted(() => {
  setLanguage(props.lang)
})

const isOpen = ref(false)
const searchQuery = ref('')
const selectedCountry = ref<Country | null>(null)
const inputValue = ref('')

const getFlagUrl = (code: string) => {
  return new URL(`../assets/flags/${code}.svg`, import.meta.url).href
}

const favoritesCountries = computed(() => {
  if (!props.favoritesCountries?.length) return []
  return props.favoritesCountries.map(code => getCountryByCode(code, props.lang))
})

const filteredCountries = computed(() => {
  const countries = getCountries(props.lang)
  const filtered = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    country.phone_code.toString().includes(searchQuery.value)
  )

  if (props.favoritesCountries?.length && favoritesCountries.value.length) {
    return filtered.filter(country => !props.favoritesCountries?.includes(country.country_code))
  }

  return filtered
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

// При изменении языка
watch(() => props.lang, (newLang) => {
  setLanguage(newLang)
})
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
              :src="getFlagUrl(selectedCountry.country_code)"
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
          <template v-if="props.favoritesCountries?.length && favoritesCountries.length">
            <div v-for="country in favoritesCountries">
              <SelectItem :value="country">
                <div class="flex items-center gap-2">
                  <img
                    :src="getFlagUrl(country.country_code)"
                    :alt="country.country_code"
                    class="w-6 h-4"
                  >
                  <span>{{ country.name }}</span>
                  <span class="text-gray-500">+{{ country.phone_code }}</span>
                </div>
              </SelectItem>
            </div>
            <SelectSeparator />
          </template>
          <div v-for="country in filteredCountries">
            <SelectItem :value="country">
              <div class="flex items-center gap-2">
                <img
                  :src="getFlagUrl(country.country_code)"
                  :alt="country.country_code"
                  class="w-6 h-4"
                >
                <span>{{ country.name }}</span>
                <span class="text-gray-500">+{{ country.phone_code }}</span>
              </div>
            </SelectItem>
          </div>
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
