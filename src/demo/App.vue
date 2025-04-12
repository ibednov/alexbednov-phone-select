<script setup lang="ts">
import { ref } from 'vue'
import PhoneSelect from '../components/PhoneSelect.vue'
import type { Language } from '../interfaces'
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n()

const phone = ref('')
const lang = ref<Language>(locale.value as Language)

const languages = availableLocales.map(code => ({
  code,
  name: t(`lang.name.${code}`)
}))

const handleLanguageChange = (newLang: Language) => {
  locale.value = newLang
  lang.value = newLang
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">{{ t('name') }}</h1>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('lang.lang') }}</label>
      <select
        :value="lang"
        @change="handleLanguageChange($event.target.value)"
        class="w-full p-2 border rounded"
      >
        <option v-for="l in languages" :key="l.code" :value="l.code">
          {{ l.name }}
        </option>
      </select>
    </div>

    <div class="p-4 bg-gray-100 rounded-lg">
      <PhoneSelect v-model="phone" :lang="lang" />
      <div class="mt-4">
        <p class="text-sm text-gray-600">{{ t('phone-select.selected_phone_number') }}:</p>
        <p class="font-mono">{{ phone }}</p>
      </div>
    </div>
  </div>
</template>
