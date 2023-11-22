import {computed, type ComputedRef, type Ref, ref, type UnwrapRef} from 'vue'

import type {adventGame} from "../../env";
import {defineStore} from 'pinia'

export enum playdateState {
  CALENDAR = 1,
  GALLERY,
}

// testing
const calendarStartDate = '2023-11-01';

// const calendarStartDate = '2023-12-01';

export const usePlaydateStore = defineStore('playdateStore', () => {

  let state: Ref<UnwrapRef<playdateState>> = ref<playdateState>(1)

  const changeToGallery = () => state.value = playdateState.GALLERY;
  const changeToCalendar = () => state.value = playdateState.CALENDAR;

  const showGallery = computed(() => state.value === playdateState.GALLERY);
  const showCalendar = computed(() => state.value === playdateState.CALENDAR);

  return { state, changeToGallery, changeToCalendar, showGallery, showCalendar }
});

export const isUnlockable = (day: number): boolean => {

  const now = new Date();
  const nowString = now.toISOString().substring(0, 10); // `${now.getDay()}-${now.getMonth()}-${now.getFullYear()}`;
/*
  console.log(nowString)
*/

  if(nowString < calendarStartDate) {
    return false;
  }

  const nowDay = nowString.substring(8, 10)
  const nowDayNumber = Number.parseInt(nowDay, 10); // - 10

  return day <= nowDayNumber
}

export const useCalendarStore = defineStore('calendarStore', () => {

  let index = ref<number>(1);
  const openedDays = ref<any[]>([]);
  const daysAmount: number = 24;

  let showWait = ref<boolean>(false);

  let gameList = ref<object[]>([]);

  const currentDayUnlocked = computed(() => openedDays.value.includes(index.value));

  const isCurrentDayUnlockable = computed(() => isUnlockable(index.value) );

  const calendarIndex = computed(() => index.value);

  const showWaitMessage = computed(() => showWait.value)

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
      return true;
    }

    return false;
  }

  const selectedGame: ComputedRef<adventGame> = computed(() => {
    if (currentDayUnlocked && gameList.value.length > 0) {
      const indexDiff = index.value - 1
      // console.log(gameList.value[indexDiff])
      return gameList.value[indexDiff] as adventGame;
    }

    return {
      Day: index.value.toString(),
      Name: `Advent ${index.value}`,
      Discount: '',
      Dev: '',
      "Secret words": '',
      "Date confirmed": '',
      "Sale confirmed": '',
      Url: '',
      CatalogUrl: '',
      Iframe: '',
    };
  });

   const fetchGameInfos = async () => {
     const gsheetUrl = 'https://opensheet.elk.sh/1pPornYJbWkLL_V7ZQoxwWrs8_EVv0GAV0OrRcCA1xRc/Calendar%202023';
     const response = await fetch(gsheetUrl);
     gameList.value = await response.json();
     console.log(gameList.value);
   }

  fetchGameInfos();

  function triggerWaitMessage() {

   if (!showWaitMessage.value) {
     showWait.value = true;

     setTimeout(() => {
       showWait.value = false;
     }, 2000)
   }
  }

  return {
    calendarIndex, openedDays,
    openDay, updateCalendarIndex, triggerWaitMessage,
    currentDayUnlocked, isCurrentDayUnlockable,
    showWaitMessage, selectedGame, daysAmount,
  }

});

