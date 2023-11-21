import {ref, computed, type Ref, type UnwrapRef, type ComputedRef} from 'vue'

import { defineStore } from 'pinia'
import {getCards, getScreenshots} from "./imageFactory";
import {useCalendarStore} from "./store";


export const useGalleryStore = defineStore('galleryStore', () => {

  const calendarStore = useCalendarStore();

  const pngAndGifs: any[] = getScreenshots()
  const cards: any[] = getCards()
  console.log(cards);

  const screenshots: Ref<UnwrapRef<any[]>> = ref(pngAndGifs);
  const screenshotsCards: Ref<UnwrapRef<any[]>> = ref(cards);

  let sIndex = ref<number>(0);
  const galleryIndex = computed(() => sIndex.value);

  const currentScreenshots : ComputedRef<any[]> = computed(() => {
    const indexDiff = calendarStore.calendarIndex - 1;
    return [screenshotsCards.value[indexDiff], ...screenshots.value[indexDiff]];
  });

  const screenshotAmount : ComputedRef<number> = computed(() => currentScreenshots.value.length);

  const updateGalleryIndex = (leftOrRight: number) => {

    // const screenshotAmount = currentScreenshots.value.length;

    if (leftOrRight !== 0) {
      sIndex.value += leftOrRight;
    }

    if (sIndex.value < 0) {
      sIndex.value = screenshotAmount.value - 1;
    } else if (sIndex.value > screenshotAmount.value - 1) {
      sIndex.value = 0;
    }

    console.log('updateGalleryIndex')
    console.log(sIndex.value)
  }

  return {
    galleryIndex,
    screenshotAmount,
    currentScreenshots,
    updateGalleryIndex,
  }
})



