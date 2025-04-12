<script setup lang="ts">
import { ref, computed } from 'vue'
import { getCountries, type Language } from '../utils/countries'

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

const handleCountrySelect = (country: any) => {
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
    <div
      class="flex items-center gap-2 p-2 border rounded cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <img
        :src="`/src/assets/flags/${selectedCountry.country_code}.svg`"
        :alt="selectedCountry.country_code"
        class="w-6 h-4"
      >
      <span>+{{ selectedCountry.phone_code }}</span>
    </div>

    <div v-if="isOpen" class="absolute top-full left-0 mt-1 w-64 bg-white border rounded shadow-lg z-10">
      <input
        v-model="searchQuery"
        type="text"
        class="w-full p-2 border-b"
        placeholder="Поиск..."
      >
      <div class="max-h-60 overflow-y-auto">
        <div
          v-for="country in filteredCountries"
          :key="country.country_code"
          class="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
          @click="handleCountrySelect(country)"
        >
          <img
            :src="`/src/assets/flags/${country.country_code}.svg`"
            :alt="country.country_code"
            class="w-6 h-4"
          >
          <span>{{ country.name }}</span>
          <span class="text-gray-500">+{{ country.phone_code }}</span>
        </div>
      </div>
    </div>

    <input
      :value="modelValue.replace(`+${selectedCountry.phone_code}`, '')"
      @input="handleInput"
      type="tel"
      class="flex-1 p-2 border rounded"
      :placeholder="`+${selectedCountry.phone_code}...`"
    >
  </div>
</template>
