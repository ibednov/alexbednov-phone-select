<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { getCountries, getCountryByCode, type Country } from '@/utils/countries'
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
import { t, setLanguage } from '@/utils/i18n'

const props = withDefaults(
  defineProps<{
    modelValue: string
    lang?: Language
    favoritesCountries?: string[]
    hideFavorites?: boolean
    enableSearch?: boolean
    selectClass?: string
    inputClass?: string
    selectPlaceholder?: string
    inputPlaceholder?: string
  }>(),
  {
    lang: 'en',
    hideFavorites: true,
    enableSearch: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:country', value: Country): void
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

  if (props.hideFavorites && props.favoritesCountries?.length && favoritesCountries.value.length) {
    return filtered.filter(country => !props.favoritesCountries?.includes(country.country_code.toLowerCase()))
  }

  return filtered
})

const handleCountrySelect = (country: Country) => {
  selectedCountry.value = country
  isOpen.value = false
  searchQuery.value = ''
  emit('update:country', country)
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
  if (!newValue) {
    selectedCountry.value = null
    inputValue.value = ''
    return
  }

  const match = newValue.match(/^(\+\d+)(.*)$/)
  if (match) {
    const code = match[1]
    const number = match[2]
    const cleanCode = code.slice(1) // Убираем +

    // Для кода 7 проверяем диапазоны
    if (cleanCode.startsWith('7')) {
      const firstDigit = cleanCode[1]
      if (firstDigit) {
        const digit = parseInt(firstDigit)
        // Для России
        if ([2, 3, 4, 5, 9].includes(digit)) {
          const country = getCountries(props.lang).find(c => c.country_code === 'RU')
          if (country) {
            selectedCountry.value = country
            inputValue.value = number
          }
        }
        // Для Казахстана
        if ([0, 6, 7].includes(digit)) {
          const country = getCountries(props.lang).find(c => c.country_code === 'KZ')
          if (country) {
            selectedCountry.value = country
            inputValue.value = number
          }
        }
      }
    } else {
      // Для остальных кодов ищем по совпадению
      const country = getCountries(props.lang).find(c =>
        c.phone_code.toString().startsWith(cleanCode)
      )
      if (country) {
        selectedCountry.value = country
        inputValue.value = number
      }
    }
  }
}, { immediate: true })

// При изменении языка
watch(() => props.lang, (newLang) => {
  setLanguage(newLang)
})
</script>

<template>
  <div class="relative flex items-center gap-2 w-full">
    <Select
      v-model="selectedCountry"
      @update:model-value="handleCountrySelect"
      :class="[props.selectClass, 'w-[180px]']"
    >
      <SelectTrigger>
        <SelectValue>
          <div class="flex items-center gap-2">
            <img
              v-if="selectedCountry"
              :src="getFlagUrl(selectedCountry.country_code)"
              :alt="selectedCountry.country_code"
              class="w-6 h-4"
            />
            <span v-if="selectedCountry">+{{ selectedCountry.phone_code }}</span>
            <span v-else class="text-gray-400">{{
              props.selectPlaceholder || t("phone-select.select-country")
            }}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <div class="p-2 border-b" v-if="props.enableSearch">
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
                  />
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
                />
                <span>{{ country.name }}</span>
                <span class="text-gray-500">+{{ country.phone_code }}</span>
              </div>
            </SelectItem>
          </div>
        </div>
      </SelectContent>
    </Select>

    <Input
      :class="[props.inputClass, 'flex-1']"
      v-model="inputValue"
      @update:model-value="handleInput"
      type="tel"
      :placeholder="props.inputPlaceholder || t('phone-select.placeholder')"
    />
  </div>
</template>

<style scoped>
.relative {
  width: 100%;
}
</style>
