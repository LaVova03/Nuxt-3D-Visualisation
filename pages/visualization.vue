<script setup>
import { ref, onMounted } from "vue";
import { Viewer, DefaultViewerParams, SpeckleLoader, UrlHelper } from "@speckle/viewer";
import { CameraController, SelectionExtension } from "@speckle/viewer";

const rendererRef = ref(null);
const isLoading = ref(true);

let isViewerInitialized = false;

async function initializeViewer() {
  const container = rendererRef.value;
  if (isViewerInitialized) return;

  const params = DefaultViewerParams;
  params.showStats = false;
  params.verbose = true;

  const viewer = new Viewer(container, params);
  await viewer.init();

  viewer.createExtension(CameraController);
  viewer.createExtension(SelectionExtension);

  const urls = await UrlHelper.getResourceUrls(
    "https://app.speckle.systems/projects/24c98619ac/models/38639656b8"
  );

  for (const url of urls) {
    const loader = new SpeckleLoader(viewer.getWorldTree(), url, "");
    await viewer.loadObject(loader, true);
  }

  isViewerInitialized = true;
  isLoading.value = false;
}

onMounted(() => {
  requestAnimationFrame(initializeViewer);
});
</script>

<template>
  <div
    v-if="isLoading"
    class="text-center text-gray-500 max-w-3xl m-auto mt-6 absolute inset-0 flex items-center justify-center"
  >
    <UProgress animation="swing" />
  </div>
  <div ref="rendererRef" class="w-full h-full absolute z-1 top-0 left-0"></div>
</template>
