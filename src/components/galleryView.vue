<script setup lang="ts">
  import { useCalendarStore } from "@/stores/store";
  import { useGalleryStore } from "@/stores/galleryStore";
  import { storeToRefs } from 'pinia'

  import { Carousel } from 'ant-design-vue';
  import { type CarouselRef } from 'ant-design-vue/es/carousel';
  import {ref, watch} from "vue";

  const galleryCarousel = ref<CarouselRef>(null)

  const calendarStore = useCalendarStore();
  const galleryStore = useGalleryStore();
  const { galleryIndex } = storeToRefs(galleryStore);

  watch(galleryIndex,
    (newValue, oldValue) => {
      galleryCarousel.value.goTo(newValue);
    },
    { deep: true }
  )

/*
  const onChange = (current: number) => {
    console.log(current);
  };
*/

</script>

<template>
  <div id="galleryView"
       class="galleryGrid">

    <Carousel ref="galleryCarousel" >

      <div v-for="(screenNumber, index) in galleryStore.screenshotAmount">
<!--
        <h2>{{ index }}</h2>
        <h2>{{ galleryStore.currentScreenshots[index] }}</h2>
-->
<!--
        :style="`width: 100%; ${index === 0 ? 'margin-top: 30px' : ''}`"
-->

        <img style="width: 100%"
              :src="galleryStore.currentScreenshots[index]"
             :alt="`screenshots ${index}`" />
      </div>

    </Carousel>

<!--
    <div style="position:absolute; top: 0;">
      <h1>{{ calendarStore.selectedGame.Name }}</h1>
    </div>

    <img style="width: 100%;"
          :src="galleryStore.currentScreenshots[galleryStore.galleryIndex]"
          :alt="`screenshots ${galleryStore.galleryIndex}`" />
-->

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

/*  :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  :deep(.slick-slide h3) {
    color: #fff;
  }*/
</style>
