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
import CountryItem from './PhoneSelect/CountryItem.vue'

const props = withDefaults(
  defineProps<{
    modelValue: string | null
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
  (e: 'update:modelValue', value: string | null): void
  (e: 'update:country', value: Country): void
}>()

const { setLanguage, t } = useI18n()

onMounted(() => {
  setLanguage(props.lang)
  if (props.modelValue) {
    parsePhoneNumber(props.modelValue)
  }
})

const isOpen = ref(false)
const {
  searchQuery,
  selectedCountry,
  inputValue,
  favorites,
  filteredCountries,
  parsePhoneNumber,
  handleSearch
} = usePhoneNumber(props.lang, props.favoritesCountries)

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

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    console.log('newValue', newValue)
    parsePhoneNumber(newValue)
  } else {
    selectedCountry.value = null
    inputValue.value = ''
  }
}, { immediate: true })

watch(() => props.lang, setLanguage)
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
      v-model="inputValue"
      @update:model-value="handleInput"
      type="tel"
      :placeholder="props.inputPlaceholder || t('phone-select.placeholder')"
    />
  </div>
</template>
