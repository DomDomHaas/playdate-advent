import {computed, type ComputedRef, ref} from 'vue'
import { useStorage } from '@vueuse/core'
import type {RemovableRef} from "@vueuse/core";

import type {adventGame, consistent} from "../../env";
import {defineStore} from 'pinia'

export const CALENDAR_STORE: string = 'CALENDAR_STORE';

// testing
const calendarStartDate = '2023-11-01';

// const calendarStartDate = '2023-12-01';

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

export const useCalendarStore = defineStore(CALENDAR_STORE, () => {

  const consistent: RemovableRef<consistent> = useStorage(CALENDAR_STORE,
    {
      calendarIndex: 1,
      openedDays: [],
    }, localStorage,
    { mergeDefaults: true },
/*
    {
      mergeDefaults: (storageValue, defaults) => deepMerge(defaults, storageValue)
    },
*/
  );

  const daysAmount: number = 24;
  let showWait = ref<boolean>(false);
  let gameList = ref<object[]>([]);

  const currentDayUnlocked = computed(() => {
    return consistent.value.openedDays.includes(consistent.value.calendarIndex);
  });

  const isCurrentDayUnlockable = computed(() => {
    return isUnlockable(consistent.value.calendarIndex);
  });

  const calendarIndex = computed(() => consistent.value.calendarIndex);
  const openedDays = computed(() => consistent.value.openedDays);

  const showWaitMessage = computed(() => showWait.value)

  const setCalendarIndex = (newIndex: number) => {
    consistent.value.calendarIndex = newIndex;
  };

  const updateCalendarIndex = (upOrDown: number, leftOrRight: number) => {
/*
    console.log('upOrDown ' + upOrDown);
    console.log('leftOrRight ' + leftOrRight);
*/
    const currentIndex : number = consistent.value.calendarIndex
    let newIndex : number = currentIndex;

    if (upOrDown !== 0) {
      newIndex += upOrDown * 6;
    }
    if (leftOrRight !== 0) {
      newIndex += leftOrRight;
    }

    if (newIndex <= 0) {
      if (newIndex < 0) {
        newIndex = daysAmount + currentIndex;
      } else {
        newIndex = daysAmount;
      }
    } else if (newIndex > daysAmount) {
      if (newIndex > daysAmount + 1) {
        newIndex = currentIndex - daysAmount;
      } else {
        newIndex = 1;
      }
    }

    setCalendarIndex(newIndex);
/*
    console.log('consistent.value.calendarIndex')
    console.log(consistent.value.calendarIndex)
*/
  }

  const openDay = (day: number) => {
    if (!consistent.value.openedDays.includes(day)) {
      consistent.value.openedDays.push(day);
      return true;
    }

    return false;
  }

  const selectedGame: ComputedRef<adventGame> = computed(() => {
    if (currentDayUnlocked && gameList.value.length > 0) {
      const indexDiff = consistent.value.calendarIndex - 1
      // console.log(gameList.value[indexDiff])
      return gameList.value[indexDiff] as adventGame;
    }

    return {
      Day: consistent.value.calendarIndex.toString(),
      Name: `Advent ${consistent.value.calendarIndex}`,
      Discount: '',
      Dev: '',
      "Secret words": '',
      "Date confirmed": '',
      "Sale confirmed": '',
      Url: '',
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
    setCalendarIndex, updateCalendarIndex,
    openDay, triggerWaitMessage,
    currentDayUnlocked, isCurrentDayUnlockable,
    showWaitMessage, selectedGame, daysAmount,
  }

});

