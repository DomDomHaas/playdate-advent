import {ref, computed, type Ref, type UnwrapRef, type ComputedRef} from 'vue'
import { defineStore } from 'pinia'
import {gameList} from "@/gameList";
import {getScreenshots} from "@/stores/imageFactory";

export enum playdateState {
  CALENDAR = 1,
  GALLERY,
}

export const usePlaydateStore = defineStore('playdateStore', () => {

  let state: Ref<UnwrapRef<playdateState>> = ref<playdateState>(1)

  const changeToGallery = () => state.value = playdateState.GALLERY;
  const changeToCalendar = () => state.value = playdateState.CALENDAR;

  const showGallery = computed(() => state.value === playdateState.GALLERY);
  const showCalendar = computed(() => state.value === playdateState.CALENDAR);

  return { state, changeToGallery, changeToCalendar, showGallery, showCalendar }
});

export const useCalendarStore = defineStore('calendarStore', () => {

  let index = ref<number>(1);
  const openedDays = ref<any[]>([]);
  const daysAmount = 24;

  const currentDayUnlocked = computed(() => openedDays.value.includes(index.value));

  const calendarIndex = computed(() => index.value);

  const updateCalendarIndex = (upOrDown: number, leftOrRight: number) => {
/*
    console.log('upOrDown ' + upOrDown);
    console.log('leftOrRight ' + leftOrRight);
*/

    if (upOrDown !== 0) {
      index.value += upOrDown * 6;
    }
    if (leftOrRight !== 0) {
      index.value += leftOrRight;
    }

    if (index.value <= 0) {
      if (index.value < 0) {
        index.value = daysAmount + index.value;
      } else {
        index.value = daysAmount;
      }
    } else if (index.value > daysAmount) {
      if (index.value > daysAmount + 1) {
        index.value = index.value - daysAmount;
      } else {
        index.value = 1;
      }
    }
/*
    console.log('index.value')
    console.log(index.value)
    */
  }

  const openDay = (day: number) => {
    if (!openedDays.value.includes(day)) {
      openedDays.value.push(day);
    }
  }

  const selectedGame = computed(() => {
    if (currentDayUnlocked) {
      return gameList[0]; /* [index.value]; */
    }

    return {
      name: `Advent ${index.value}`,
      url: '',
      iframe: '',
    };
  });

  return {
    calendarIndex, openedDays,
    openDay, updateCalendarIndex,
    currentDayUnlocked, selectedGame,
    daysAmount,
  }

});

export const useGalleryStore = defineStore('galleryStore', () => {

  const calendarStore = useCalendarStore();

  const pngAndGifs: any[] = getScreenshots()
  const screenshots: Ref<UnwrapRef<any[]>> = ref(pngAndGifs);

  let sIndex = ref<number>(0);
  const screenshotIndex = computed(() => sIndex.value);

  const currentScreenshots : ComputedRef<any[]> = computed(() => screenshots.value[calendarStore.calendarIndex - 1]);

  const updateScreenshotIndex = (leftOrRight: number) => {

    const screenshotAmount = currentScreenshots.value.length;

    if (leftOrRight !== 0) {
      sIndex.value += leftOrRight;
    }

    if (sIndex.value < 0) {
      sIndex.value = screenshotAmount - 1;
    } else if (sIndex.value > screenshotAmount - 1) {
      sIndex.value = 0;
    }

  }

  return {
    screenshotIndex,
    currentScreenshots,
    updateScreenshotIndex,
  }
})



