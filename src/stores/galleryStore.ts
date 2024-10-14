import {ref, computed, type Ref, type ComputedRef, nextTick} from 'vue'

import { defineStore, type Store } from 'pinia'
import {getCards, getIcons, getScreenshots} from "./imageFactory";


const suffix = import.meta.env.VITE_LOCAL_STORAGE_SUFFIX
export const GALLERY_STORE: string = `GALLERY_STORE_${suffix}`;


export const useGalleryStore = defineStore(GALLERY_STORE, () => {

  // let pngAndGifs: any[];
  let calStore: Store;
  // let screenshots: Ref<UnwrapRef<any[]>>;
  let screenshots: Ref<string[]> = ref([]);
  let icons: Ref<string[]> = ref([]);
  let screenshotsCards: Ref<string[]> = ref([]);
  const loading: Ref<boolean> = ref(false);

  const initGallery = async (year: string, calendarStore: Store) => {
    loading.value = true;
    // console.log('loading', loading.value);
    calStore = calendarStore;

    const pngAndGifs = await getScreenshots(year) || [];
    screenshots = ref(pngAndGifs);
    // console.log('screenshots', screenshots.value);

    const icns = await getIcons(year) || [];
    icons = ref(icns);
    // console.log('icons', icons.value);

    const cards: string[] = await getCards(year) || [];
    screenshotsCards = ref(cards);
    // console.log('screenshotsCards', screenshotsCards.value);

    loading.value = false;
    // console.log('loading', loading.value);
  }



  const sIndex = ref<number>(0);
  const galleryIndex : ComputedRef<number> = computed(() => sIndex.value);

  const currentScreenshots : ComputedRef<any[]> = computed(() => {
    const indexDiff = calStore.calendarIndex - 1;

    if (indexDiff >= 0 && screenshots.value?.length > 0) {
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
      if (calStore.currentDayRotated) {
        sIndex.value -= upOrDown;
      } else {
        sIndex.value += upOrDown;
      }
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

  const gameIcons : ComputedRef<string[]> = computed(() => icons.value);

  const galleryLoading : ComputedRef<Boolean> = computed(() => loading.value);

  return {
    initGallery,
    galleryLoading,
    galleryIndex,
    screenshotAmount,
    currentScreenshots,
    updateGalleryIndex,
    resetGalleryIndex,
    gameIcons,
  }
})



