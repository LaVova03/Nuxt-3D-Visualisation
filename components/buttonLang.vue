<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useSwitchLocalePath } from "#imports";
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const currentLocale = computed(() => locale.value);
</script>

<template>
  <UButton class="absolute right-0 :md:right-8 z-10">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      @click="setLanguagePreference(locale.code)"
      :class="{ active: currentLocale === locale.code }"
    >
      {{ currentLocale }}
    </NuxtLink>
  </UButton>
</template>
