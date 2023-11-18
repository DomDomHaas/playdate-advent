<script setup lang="ts">

import {useGalleryStore} from "@/stores/store";

  const {
    name,
  } = defineProps<{
    name: string,
  }>()

  const galleryStore = useGalleryStore();

</script>

<template>
  <div id="galleryView"
       class="galleryGrid">

    <div style="position:absolute; top: 0;">
      <h1>{{ name }}</h1>
    </div>

    <img style="width: 100%;"
          :src="galleryStore.currentScreenshots[galleryStore.screenshotIndex]"
          :alt="`screenshots ${galleryStore.screenshotIndex}`" />

  </div>
</template>

<style scoped>
.galleryGrid {
  position: absolute;
  top: 0;
  width: 400px;
  height: 238px;
  padding: 22px 0 0 36px;
  z-index: 1;
}

/*
  .galleryGrid {
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
    width: 400px;
    height: 238px;
    padding: 22px 0 0 36px;
    z-index: 1;
  }

  .calenderCell {
    display: flex;
  }
  .cellClosed {
    background-color: rgb(128, 128, 128);
  }
  .cellOpened {
    background-color: white;
  }

  .cellSelected {
    border: black solid 2px;
  }
  */
</style>
