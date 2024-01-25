import {computed, ref } from 'vue'
import type { ComputedRef, Ref, UnwrapRef} from 'vue'
import { useStorage } from '@vueuse/core'
import type {RemovableRef} from "@vueuse/core";

import type {adventGame, consistent} from "../../env";
import {defineStore, storeToRefs} from 'pinia'
import {usePlaydateStore} from "@/stores/pdStore";
import router from "@/router";

const suffix = import.meta.env.VITE_LOCAL_STORAGE_SUFFIX
export const CALENDAR_STORE: string = `CALENDAR_STORE_${suffix}`;

const startDate: string = import.meta.env.VITE_START_DATE
const calendarStartDate = startDate || '2023-12-01';
const unwrapAnimationTime = 3100;


// logic for beta / prod storage names

export const useCalendarStore = defineStore(CALENDAR_STORE, () => {


  const daysAmount: number = 25;
  const dayIsOpening: Ref<UnwrapRef<boolean>> = ref(false);

  const consistent: RemovableRef<consistent> = useStorage(CALENDAR_STORE,
    {
      calendarIndex: 1,
      openedDays: [],
    }, localStorage,
    // { mergeDefaults: true },
    {
      mergeDefaults: ((storageValue: consistent, defaults: consistent) => {
        // todo logic for 2023 & 2024, etc.
        let calendarIndex = defaults.calendarIndex;
        if (storageValue.calendarIndex && storageValue.calendarIndex >= 0) {
          calendarIndex = storageValue.calendarIndex
        }

        return {
          calendarIndex: calendarIndex > daysAmount ? daysAmount : calendarIndex,
          openedDays: storageValue.openedDays ? storageValue.openedDays : defaults.openedDays,
        } as consistent;
      }),
    },
  );

  let showWait = ref<boolean>(false);
  let gameList = ref<object[]>([]);

  const currentDayUnlocked = computed(() => {
    return consistent.value.openedDays.includes(consistent.value.calendarIndex);
  });

  const isUnlockable = (nowString: string, day: number, currentMonth: string, currentYear: string): boolean => {

    if(nowString < calendarStartDate) {
      return false;
    }

    const currentYearNr = Number.parseInt(currentYear, 10);
    const startYearNr = Number.parseInt(calendarStartDate.substring(0, 4), 10);

    if (currentYearNr < startYearNr) {
      return false;
    }

    const currentMonthNr = Number.parseInt(currentMonth, 10);
    const startMonthNr = Number.parseInt(calendarStartDate.substring(5, 7), 10);

    if (currentYearNr === startYearNr && currentMonthNr < startMonthNr) {
      return false;
    }


    const nowDay = nowString.substring(8, 10)
    const nowDayNumber = Number.parseInt(nowDay, 10); // - 10

    return day <= nowDayNumber
  }

  const isCurrentDayUnlockable = computed(() => {
    const playdateStore = usePlaydateStore();
    const { currentDayMonthYear, currentMonth, currentYear } = storeToRefs(playdateStore);

    return isUnlockable(currentDayMonthYear.value,
      consistent.value.calendarIndex, currentMonth.value, currentYear.value);
  });

  const isCalendarReady = computed(() => {
    const playdateStore = usePlaydateStore();
    const { currentDayMonthYear, currentMonth, currentYear } = storeToRefs(playdateStore);

    const startDay = calendarStartDate.substring(8, 10);
    const dayNumber = Number.parseInt(startDay, 10);

    return isUnlockable(currentDayMonthYear.value, dayNumber, currentMonth.value, currentYear.value);
  })

  const isCalendarActive = computed(() => {
    return false;
  })

  const calendarIndex = computed(() => consistent.value.calendarIndex);
  const openedDays = computed(() => consistent.value.openedDays);

  const showWaitMessage = computed(() => showWait.value)

  const setCalendarIndex = (newIndex: number, updateRoute: boolean = false) => {
    consistent.value.calendarIndex = newIndex;
    if (updateRoute) {
      router.push({ name: 'home', params: { day: newIndex }});
    }
  };

  const updateCalendarIndex = (upOrDown: number, leftOrRight: number) => {
/*
    console.log('upOrDown ' + upOrDown);
    console.log('leftOrRight ' + leftOrRight);
*/

    let newIndex : number = consistent.value.calendarIndex;

    if (upOrDown !== 0) {
      newIndex += upOrDown * 6;
    }
    if (leftOrRight !== 0) {
      newIndex += leftOrRight;
    }

    if (newIndex <= 0) {
      if (newIndex < 0) {
        newIndex = daysAmount + newIndex;
      } else {
        newIndex = daysAmount;
      }
    } else if (newIndex > daysAmount) {
      if (newIndex > daysAmount + 1) {
        newIndex = newIndex - daysAmount;
      } else {
        newIndex = 1;
      }
    }

    setCalendarIndex(newIndex, true);
/*
    console.log('calendarIndex ' + consistent.value.calendarIndex)
*/
  }

  const openDay = (day: number) => {

    if (!consistent.value.openedDays.includes(day)
        && !dayIsOpening.value) {
      dayIsOpening.value = true;

      setTimeout(() => {
        // open with a delay for the animation to play
        if (!consistent.value.openedDays.includes(day)) {
          consistent.value.openedDays.push(day);
          dayIsOpening.value = false;
        }

      }, unwrapAnimationTime);

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
      DevUrl: '',
      Iframe: '',
      IframeMobile: '',
      Notes: '',
      Catalog: '',
    };
  });

   const fetchGameInfos = async () => {
     const gsheetUrl = 'https://opensheet.elk.sh/1pPornYJbWkLL_V7ZQoxwWrs8_EVv0GAV0OrRcCA1xRc/Calendar%202023';
     const response = await fetch(gsheetUrl);
     gameList.value = await response.json();
/*
     console.log(gameList.value);
*/
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

  const rotatedDays = [22];

  const currentDayRotated = computed(() => {

    const dayNumber = calendarIndex.value;
    return rotatedDays.includes(dayNumber)
  })

  return {
    calendarIndex, openedDays, dayIsOpening, currentDayRotated,
    setCalendarIndex, updateCalendarIndex,
    openDay, triggerWaitMessage, isCalendarReady,
    currentDayUnlocked, isCurrentDayUnlockable,
    showWaitMessage, selectedGame, daysAmount,
    isCalendarActive,
  }

});

