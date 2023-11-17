import {ref, computed, type Ref, type UnwrapRef} from 'vue'
import { defineStore } from 'pinia'
import {gameList} from "@/gameList";

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

  let index = ref<number>(2);
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
        index.value = 0;
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

  let sIndex = ref<number>(0);
  const screenshotIndex = computed(() => sIndex.value);

  const updateScreenshotIndex = (leftOrRight: number) => {

    const screenshotAmount = calendarStore.selectedGame.screenshots.length;

    if (leftOrRight !== 0) {
      sIndex.value += leftOrRight;
    }

    if (sIndex.value < 0) {
/*
      if (sIndex.value < 0) {
        sIndex.value = screenshotAmount + sIndex.value;
      } else {
*/
        sIndex.value = screenshotAmount - 1;
/*
      }
*/
    } else if (sIndex.value > screenshotAmount - 1) {
/*
      if (sIndex.value > screenshotAmount + 1) {
        sIndex.value = sIndex.value - screenshotAmount;
      } else {
*/
        sIndex.value = 0;
/*
      }
*/
    }
  }

  return {
    screenshotIndex,
    updateScreenshotIndex,
  }
})
