<script setup lang="ts">
  import {useCalendarStore, useGalleryStore} from "@/stores/store";

  const calendarStore = useCalendarStore();
  const galleryStore = useGalleryStore();

</script>

<template>
  <div id="galleryView"
       class="galleryGrid">

    <div style="position:absolute; top: 0;">
      <h1>{{ calendarStore.selectedGame.Name }}</h1>
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
    padding: 36px 0 0 34px;
    z-index: 1;
  }


</style>
