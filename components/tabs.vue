<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import type { TabsItem } from "@nuxt/ui";

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();

const items = ref<TabsItem[]>([
  {
    label: "",
    icon: "i-lucide-home",
    route: "/",
  },
  {
    label: "",
    icon: "i-lucide-rotate-3d",
    route: "/visualization",
  },
]);

const active = ref("0");

const updateTabLabels = () => {
  items.value[0].label = t("label1");
  items.value[1].label = t("label2");
};

onMounted(() => {
  updateTabLabels();
});

watch(
  () => route.path,
  (newPath) => {
    const tabIndex = items.value.findIndex((item) => item.route === newPath);
    if (tabIndex !== -1 && tabIndex !== Number(active.value)) {
      active.value = String(tabIndex);
    }
  }
);

watch(active, (newValue) => {
  const routePath = items.value[Number(newValue)].route;
  if (routePath !== route.path) {
    router.push(routePath);
  }
});

watch(locale, () => {
  updateTabLabels();
});
</script>

<template>
  <UTabs
    v-model="active"
    :items="items"
    :content="false"
    class="w-full text-center relative z-10"
  />
</template>
