<script setup lang="ts">
import Tabs from "@/components/tabs.vue";
import BtnLang from "@/components/buttonLang.vue";
</script>

<template>
  <UApp>
    <div class="flex flex-col text-[white] mb-8 justify-center items-center">
      <div class="w-full max-w-[1200px] flex flex-row items-center relative">
        <div class="w-[240px] md:w-[500px] m-auto"><Tabs /></div>
        <BtnLang />
      </div>
      <NuxtPage />
    </div>
  </UApp>
</template>
