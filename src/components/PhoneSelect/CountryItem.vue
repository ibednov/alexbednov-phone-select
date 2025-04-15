<script setup lang="ts">
import { type Country } from '@/utils/countries'

defineProps<{
  country: Country
}>()

const getFlagUrl = (code: string) => {
  return new URL(`../../assets/flags/${code}.svg`, import.meta.url).href
}
</script>

<template>
  <div class="flex items-center gap-2">
    <img
      :src="getFlagUrl(country.country_code)"
      :alt="country.country_code"
      class="w-6 h-4"
    />
    <span>{{ country.name }}</span>
    <span class="text-gray-500">+{{ country.phone_code }}</span>
  </div>
</template>
