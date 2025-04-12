<script setup lang="ts">
import { ref } from "vue";
import PhoneSelect from "@/components/PhoneSelect.vue";
import Author from "@/demo/author.vue";

const phoneNumber = ref("");
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 flex flex-col gap-4">
    <h1 class="text-3xl font-bold">alexbednov-phone-select</h1>

    <div class="flex flex-col gap-8">
      <div class="p-4 bg-gray-100 rounded-lg">
        <PhoneSelect
          v-model="phoneNumber"
          lang="en"
          :favorites-countries="['by', 'ru']"
        />
        <div class="mt-4">
          <p class="text-sm text-gray-600">Selected number:</p>
          <p class="font-mono">{{ phoneNumber }}</p>
        </div>
      </div>
<!--
      <div class="p-4 bg-gray-100 rounded-lg">
        <PhoneSelect
          v-model="phoneNumber"
          lang="en"
          :favorites-countries="['by', 'ru']"
        />
        <div class="mt-4">
          <p class="text-sm text-gray-600">Выбранный номер:</p>
          <p class="font-mono">{{ phoneNumber }}</p>
        </div>
      </div>

      <div class="p-4 bg-gray-100 rounded-lg">
        <PhoneSelect
          v-model="phoneNumber"
          lang="az"
          :favorites-countries="['by', 'ru']"
        />
        <div class="mt-4">
          <p class="text-sm text-gray-600">Выбранный номер:</p>
          <p class="font-mono">{{ phoneNumber }}</p>
        </div>
      </div>

      <div class="p-4 bg-gray-100 rounded-lg">
        <PhoneSelect
          v-model="phoneNumber"
          lang="be"
          :favorites-countries="['by', 'ru']"
        />
        <div class="mt-4">
          <p class="text-sm text-gray-600">Выбранный номер:</p>
          <p class="font-mono">{{ phoneNumber }}</p>
        </div>
      </div> -->
    </div>

    <Author />
  </div>
</template>
