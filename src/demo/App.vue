<script setup lang="ts">
import { ref } from "vue";
import PhoneSelect from "@/components/PhoneSelect.vue";
import Author from "@/demo/author.vue";

const phoneNumber = ref<string | null>("");
const phoneNumber2 = ref<string | null>("");

const country = ref(null);
const country2 = ref(null);
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 flex flex-col gap-4">
    <h1 class="text-3xl font-bold">alexbednov-phone-select</h1>

    <div class="flex flex-col gap-8">
      <div class="p-4 bg-gray-100 rounded-lg flex flex-col gap-4">
        <PhoneSelect
          v-model="phoneNumber"
          lang="en"
          :favorites-countries="['by', 'ru', 'it', 'ae']"
          @update:country="country = $event"
          hide-favorites
          enableMask
          disable-country-name-select
          disable-auto-parse-number
          select-content-class="max-h-[500px] overflow-y-auto"
          select-item-class="h-6"

        />


<div class="bg-gray-400/30 p-3 rounded-lg text-sm">
  <pre>
v-model="phoneNumber"
lang="en"
:favorites-countries="['by', 'ru']"
@update:country="country = $event"
hide-favorites
enableMask
  </pre>
</div>

        <div class="mt-4">
          <p class="text-sm text-gray-600">Selected number:</p>
          <p class="font-mono">{{ phoneNumber }}</p>
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-600">Selected country:</p>
          <p class="font-mono">{{ country }}</p>
        </div>
      </div>


      <div class="p-4 bg-gray-100 rounded-lg flex flex-col gap-4">
        <PhoneSelect
          v-model="phoneNumber2"
          lang="be"
          @update:country="country2 = $event"
          enableSearch
        />


        <div class="bg-gray-400/30 p-3 rounded-lg text-sm">
          <pre>
v-model="phoneNumber2"
lang="ru"
@update:country="country = $event"
enableSearch
          </pre>
        </div>

        <div class="">
          <p class="text-sm text-gray-600">Selected number:</p>
          <p class="font-mono">{{ phoneNumber2 }}</p>
        </div>
        <div class="">
          <p class="text-sm text-gray-600">Selected country:</p>
          <p class="font-mono">{{ country2 }}</p>
        </div>
      </div>


    </div>


    <Author />
  </div>
</template>
