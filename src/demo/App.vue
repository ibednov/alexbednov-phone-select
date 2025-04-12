<script setup lang="ts">
import { ref } from "vue";
import PhoneSelect from "@/components/PhoneSelect.vue";
import { useI18n } from "vue-i18n";
import Lang from "@/demo/lang.vue";
import Author from "@/demo/author.vue";

const { locale, t } = useI18n();
const phone = ref("");
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 flex flex-col gap-4">
    <h1 class="text-3xl font-bold">{{ t("name") }}</h1>

    <Lang/>

    <div class="p-4 bg-gray-100 rounded-lg">
      <PhoneSelect
        v-model="phone"
        :lang="locale"
        :favorites-countries="['ru', 'by']"
      />
      <div class="mt-4">
        <p class="text-sm text-gray-600">{{ t('phone-select.selected_phone_number') }}:</p>
        <p class="font-mono">{{ phone }}</p>
      </div>
    </div>

    <Author/>
  </div>
</template>
