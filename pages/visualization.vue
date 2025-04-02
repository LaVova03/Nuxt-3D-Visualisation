<script setup>
import { ref, onMounted } from "vue";
import { Viewer, DefaultViewerParams, SpeckleLoader, UrlHelper } from "@speckle/viewer";
import { CameraController, SelectionExtension } from "@speckle/viewer";

const rendererRef = ref(null);

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
}

onMounted(() => {
  requestAnimationFrame(initializeViewer);
});
</script>

<template>
  <div ref="rendererRef" class="w-full h-full absolute z-1 top-0 left-0"></div>
</template>
