import {ref, computed, type Ref, type UnwrapRef, type ComputedRef} from 'vue'

import { defineStore } from 'pinia'
import {getScreenshots} from "./imageFactory";
import {getCards} from "@/stores/cardFactory";
import {useCalendarStore} from "./calendarStore";

const suffix = import.meta.env.VITE_LOCAL_STORAGE_SUFFIX
export const GALLERY_STORE: string = `GALLERY_STORE_${suffix}`;


export const useGalleryStore = defineStore('galleryStore', () => {

  const calendarStore = useCalendarStore();

  const pngAndGifs: any[] = getScreenshots()
  const cards: any[] = getCards()

  const screenshots: Ref<UnwrapRef<any[]>> = ref(pngAndGifs);
  const screenshotsCards: Ref<UnwrapRef<any[]>> = ref(cards);

  let sIndex = ref<number>(0);
  const galleryIndex = computed(() => sIndex.value);

  const currentScreenshots : ComputedRef<any[]> = computed(() => {
    const indexDiff = calendarStore.calendarIndex - 1;
    
    if (indexDiff >= 0) {
      return [screenshotsCards.value[indexDiff], ...screenshots.value[indexDiff]];
    }

    return [];
  });

  const screenshotAmount : ComputedRef<number> = computed(() => currentScreenshots.value.length);

  const updateGalleryIndex = (upOrDown: number, leftOrRight: number) => {

    // const screenshotAmount = currentScreenshots.value.length;

    if (leftOrRight !== 0) {
      sIndex.value += leftOrRight;
    }

    if (upOrDown !== 0) {
      sIndex.value += upOrDown;
    }

    if (sIndex.value < 0) {
      sIndex.value = screenshotAmount.value - 1;
    } else if (sIndex.value > screenshotAmount.value - 1) {
      sIndex.value = 0;
    }

/*
    console.log('updateGalleryIndex')
    console.log(sIndex.value)
*/
  }

  const resetGalleryIndex = () => {
    sIndex.value = 0
  }

  return {
    galleryIndex,
    screenshotAmount,
    currentScreenshots,
    updateGalleryIndex,
    resetGalleryIndex,
  }
})



