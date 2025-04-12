<script setup lang="ts">
import { ref, watch } from 'vue'
import { setLanguage } from '@/utils/i18n'

const languages = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
  { code: 'az', name: 'Azərbaycan' },
  { code: 'be', name: 'Беларуская' }
]

const selectedLang = ref('ru')

watch(selectedLang, (newLang) => {
  setLanguage(newLang)
})
</script>

<template>
  <div class="flex items-center gap-2">
    <label for="lang" class="text-sm text-gray-600">Язык:</label>
    <select
      id="lang"
      v-model="selectedLang"
      class="px-2 py-1 border rounded"
    >
      <option
        v-for="lang in languages"
        :key="lang.code"
        :value="lang.code"
      >
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>
