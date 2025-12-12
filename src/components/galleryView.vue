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
              effect="fade"
              autoplay
              :autoplay-speed="5000"
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
    width: 245px !important;
    margin: 42px 0 0 256px !important;
    padding: 0;
  }

  @media (max-width: 560px) {

    .rotatedGallery {
      height: 290px !important;
      width: 178px !important;
      margin: 16px 0 0 198px !important;
      padding: 0;
    }

  }

</style>
