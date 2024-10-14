<script setup lang="ts">
  import { useCalendarStore } from "@/stores/calendarStore";
  import { useGalleryStore } from "@/stores/galleryStore";
  import { storeToRefs } from 'pinia'

  import { Carousel } from 'ant-design-vue';
  import { type CarouselRef } from 'ant-design-vue/es/carousel';
  import {computed, ref, watch} from "vue";
  import gameGiftUnwrap from "@/assets/gameGiftUnwrap.gif";
  import {usePlaydateStore} from "@/stores/pdStore";

  const galleryCarousel = ref<CarouselRef>()

  const calendarStore = useCalendarStore();
  const galleryStore = useGalleryStore();
  const { galleryLoading, galleryIndex } = storeToRefs(galleryStore);
  const playdateStore = usePlaydateStore();

  const isPlaydateRotated = computed(() => {
    return calendarStore.currentDayRotated && playdateStore.showGallery
  })
/*
  console.log('galleryStore screenshots');
  console.log(galleryStore.currentScreenshots);
*/

  watch(galleryIndex,
    (newValue, oldValue) => {
      //@ts-ignore
      galleryCarousel.value?.goTo(newValue);
    },
    { deep: true }
  )

  function getScreenShot(index: number) {
    return galleryStore.currentScreenshots[index] || '';
  }

  const screenshots = computed(() => {
    // console.log('galleryStore.currentScreenshots', galleryStore.currentScreenshots);
    return galleryStore.currentScreenshots;
  })  

</script>

<template>
  <div id="galleryView"
       class="gallery"
       :class="isPlaydateRotated ? 'rotatedGallery' : ''" >

    <img v-if="calendarStore.dayIsOpening"
         class="gameGiftUnwrap"
         :src="gameGiftUnwrap" alt="game unwrapping present gif">

    <Carousel v-if="!galleryLoading && !calendarStore.dayIsOpening"
              class=""
              ref="galleryCarousel">

      <div v-for="(screenShot, index) in screenshots"
            :key="`screenshot_${index}`"
      >

        <img class="galleryImage"
              :src="getScreenShot(index)"
             :alt="`screenshots ${index}`" />
      </div>

    </Carousel>

  </div>
</template>


<style scoped>

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

  .rotatedGallery {
    height: 400px !important;
    width: 240px !important;
    padding: 48px 0 0 256px !important;
  }

  @media (max-width: 560px) {

    .rotatedGallery {
      height: 290px !important;
      width: 178px !important;
      padding: 12px 0 0 196px !important;
    }

  }

</style>
