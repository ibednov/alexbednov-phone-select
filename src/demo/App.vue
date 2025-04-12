<script setup lang="ts">
import { ref } from "vue";
import PhoneSelect from "@/components/PhoneSelect.vue";
import type { Language } from "@/interfaces";
import { useI18n } from "vue-i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const { t, locale, availableLocales } = useI18n();

const phone = ref("");
const lang = ref<Language>(locale.value as Language);

const languages = availableLocales.map((code) => ({
  code,
  name: t(`lang.name.${code}`),
}));

const handleLanguageChange = (newLang: Language) => {
  locale.value = newLang;
  lang.value = newLang;
};
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 flex flex-col gap-4">
    <h1 class="text-3xl font-bold">{{ t("name") }}</h1>

    <div class="">
      <label class="block text-sm font-medium text-gray-700 mb-2">{{
        t("lang.lang")
      }}</label>
      <Select :model-value="lang" @update:model-value="handleLanguageChange">
        <SelectTrigger class="w-full">
          <SelectValue :placeholder="t('lang.lang')" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="l in languages" :key="l.code" :value="l.code">
            {{ l.name }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div class="p-4 bg-gray-100 rounded-lg">
      <PhoneSelect v-model="phone" :lang="lang" />
      <div class="mt-4">
        <p class="text-sm text-gray-600">
          {{ t("phone-select.selected_phone_number") }}:
        </p>
        <p class="font-mono">{{ phone }}</p>
      </div>
    </div>
    <div class="text-center text-sm text-gray-600 flex flex-col gap-1 mx-auto">
      <div>
        {{ t("demo.author.authored_by") }}
      </div>
      <div class="flex gap-2 items-center font-bold">
        <a href="https://alexbednov.work" class="underline decoration-3 decoration-offset-6 decoration-green-800/40 hover:decoration-green-800/60" target="_blank">
          {{ t("demo.author.name") }}
        </a>
        <a
          href="https://alexbednov.dev"
          class=" text-xs text-gray-400 underline decoration-3 decoration-offset-6 decoration-gray-400 hover:decoration-green-800/60"
          target="_blank"
        >
          {{ t("demo.author.mirror") }}
        </a>
      </div>
    </div>
  </div>
</template>
