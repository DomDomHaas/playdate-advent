<script setup lang="ts">
  import { useCalendarStore } from "@/stores/calendarStore";
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
       class="gallery">

    <Carousel ref="galleryCarousel" >

      <div v-for="(screenNumber, index) in galleryStore.screenshotAmount">

        <img class="galleryImage"
              :src="galleryStore.currentScreenshots[index]"
             :alt="`screenshots ${index}`" />
      </div>

    </Carousel>

  </div>
</template>

<style scoped>
  .gallery {
    position: absolute;
    top: 0;
    width: 400px;
    height: 238px;
    padding: 36px 0 0 34px;
    z-index: 1;
  }

  .galleryImage {
    /*
    width: 400px;
    height: 238px;
    */
    width: 100%;
  }


</style>
