<script setup lang="ts">
import { ref, computed } from 'vue'
import { getCountries, type Country, type Language } from '../utils/countries'
import { useI18n } from 'vue-i18n'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
const selectedCountry = ref(getCountries(props.lang)[0])

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
  emit('update:modelValue', `+${country.phone_code}`)
}

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', `+${selectedCountry.value.phone_code}${target.value}`)
}
</script>

<template>
  <div class="relative flex items-center gap-2">
    <Select v-model="selectedCountry" @update:model-value="handleCountrySelect">
      <SelectTrigger class="w-[180px]">
        <SelectValue>
          <div class="flex items-center gap-2">
            <img
              :src="`/src/assets/flags/${selectedCountry.country_code}.svg`"
              :alt="selectedCountry.country_code"
              class="w-6 h-4"
            >
            <span>+{{ selectedCountry.phone_code }}</span>
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
      :value="modelValue.replace(`+${selectedCountry.phone_code}`, '')"
      @input="handleInput"
      type="tel"
      :placeholder="t('phone-select.placeholder')"
    />
  </div>
</template>
