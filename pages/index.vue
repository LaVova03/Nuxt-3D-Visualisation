<script setup lang="ts">
const { data, status, error } = useFetch("/api/data");
</script>

<template>
  <div class="favorite space-y-8 max-w-[1200px]">
    <div
      v-if="status === 'pending'"
      class="text-center text-gray-500 max-w-3xl m-auto mt-6"
    >
      <UProgress animation="swing" />
    </div>

    <div v-else-if="error" class="text-center text-red-500">Error</div>

    <div v-else class="grid grid-cols-3 grid-rows-2 gap-8">
      <div
        v-for="(article, index) in data"
        :key="index"
        class="article-item p-4 border rounded-lg shadow-lg font-serif opacity-0 transform translate-y-10 transition-all duration-500 ease-out"
        :class="{
          animate__animated: true,
          animate__fadeInUp: true,
          'opacity-100 translate-y-0': true,
        }"
      >
        <h2 class="text-2xl text-center">
          {{ $t(`articles.${index}.title`) }}
        </h2>

        <NuxtImg :src="article.picture" width="400" lazy class="mt-8 mb-8 m-auto" />
        <p class="text-base mb-4">{{ $t(`articles.${index}.text`) }}</p>
        <span class="text-sm text-gray-300 font-sans">{{ article.publicationDate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, auto);
    gap: 1.5rem;
  }
}
</style>
