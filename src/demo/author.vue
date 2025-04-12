<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="text-center text-sm text-gray-600 flex flex-col gap-1 mx-auto">
    <div>
      {{ t("demo.author.authored_by") }}
    </div>
    <div class="flex gap-2 items-center font-bold">
      <a
        href="https://alexbednov.work"
        class="underline decoration-3 decoration-offset-6 decoration-green-800/40 hover:decoration-green-800/60"
        target="_blank"
      >
        {{ t("demo.author.name") }}
      </a>
      <a
        href="https://alexbednov.dev"
        class="text-xs text-gray-400 underline decoration-3 decoration-offset-6 decoration-gray-400 hover:decoration-green-800/60"
        target="_blank"
      >
        {{ t("demo.author.mirror") }}
      </a>
    </div>
  </div>
</template>
