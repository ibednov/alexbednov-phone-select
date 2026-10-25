<script setup lang="ts">
import type { Country } from '@/interfaces'
import Input from '@/components/ui/input/Input.vue'
import SelectItem from '@/components/ui/select/SelectItem.vue'
import SelectSeparator from '@/components/ui/select/SelectSeparator.vue'
import CountryItem from './CountryItem.vue'
import { useTranslate } from '@/composables/useTranslate'

defineProps<{
  favorites: Country[]
  filteredCountries: Country[]
  hasFavorites: boolean
  enableSearch: boolean
  disableCountryNameSelect: boolean
  selectItemClass?: string
  selectItemCountryClass?: string
}>()

const searchQuery = defineModel<string>('searchQuery', { default: '' })
const { t } = useTranslate()
</script>

<template>
  <div class="p-2 border-b" v-if="enableSearch">
    <Input
      v-model="searchQuery"
      @keydown.stop
      type="text"
      :placeholder="t('phone-select.search')"
      class="w-full"
    />
  </div>
  <div class="max-h-60 overflow-y-auto overflow-x-hidden">
    <template v-if="hasFavorites && favorites.length">
      <div v-for="country in favorites" :key="country.country_code">
        <SelectItem :value="country" :class="[selectItemClass]">
          <CountryItem
            :country="country"
            :disable-country-name-select="disableCountryNameSelect"
            :select-item-country-class="selectItemCountryClass"
          />
        </SelectItem>
      </div>
      <SelectSeparator />
    </template>
    <div v-for="country in filteredCountries" :key="country.country_code">
      <SelectItem :value="country" :class="[selectItemClass]">
        <CountryItem
          :country="country"
          :disable-country-name-select="disableCountryNameSelect"
          :select-item-country-class="selectItemCountryClass"
        />
      </SelectItem>
    </div>
  </div>
</template>
