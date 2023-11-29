<script setup lang="ts">
  import { useCalendarStore } from "@/stores/calendarStore";
  import { useGalleryStore } from "@/stores/galleryStore";
  import { storeToRefs } from 'pinia'

  import { Carousel } from 'ant-design-vue';
  import { type CarouselRef } from 'ant-design-vue/es/carousel';
  import {ref, watch} from "vue";
  import gameGiftUnwrap from "@/assets/gameGiftUnwrap.gif";

  const galleryCarousel = ref<CarouselRef>(null)

  const calendarStore = useCalendarStore();
  const galleryStore = useGalleryStore();
  const { galleryIndex } = storeToRefs(galleryStore);

/*
  console.log('galleryStore screenshots');
  console.log(galleryStore.currentScreenshots);
*/

  watch(galleryIndex,
    (newValue, oldValue) => {
      galleryCarousel.value.goTo(newValue);
    },
    { deep: true }
  )


</script>

<template>
  <div id="galleryView"
       class="gallery">

    <img v-if="calendarStore.dayIsOpening"
         class="gameGiftUnwrap"
         :src="gameGiftUnwrap" alt="game unwrapping present gif">

    <Carousel v-show="!calendarStore.dayIsOpening"
              ref="galleryCarousel" >

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

  .gameGiftUnwrap {
    width: 100%;
    height: 100%;
  }

</style>
