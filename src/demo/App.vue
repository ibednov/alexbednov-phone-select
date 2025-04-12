<script setup lang="ts">
import { ref } from 'vue'
import PhoneSelect from '../components/PhoneSelect.vue'
import type { Language } from '../utils/countries'

const phone = ref('')
const lang = ref<Language>('ru')

const languages = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' }
]
</script>

<template>
  <div class="max-w-3xl mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">Phone Select Demo</h1>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">Language</label>
      <select
        v-model="lang"
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
        <p class="text-sm text-gray-600">Selected phone number:</p>
        <p class="font-mono">{{ phone }}</p>
      </div>
    </div>
  </div>
</template>
