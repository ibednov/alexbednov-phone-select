<script setup lang='ts'>
import type { Language } from "@/interfaces";
import { useI18n } from "vue-i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ref } from "vue";

const { t, locale, availableLocales } = useI18n();

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
</template>
