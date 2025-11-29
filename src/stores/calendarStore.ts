import {computed, ref } from 'vue'
import type { ComputedRef, Ref, UnwrapRef} from 'vue'
import { useStorage } from '@vueuse/core'
import type {RemovableRef} from "@vueuse/core";

import type {adventGame, consistent} from "../../env";
import {defineStore, storeToRefs} from 'pinia'
import {usePlaydateStore} from "@/stores/pdStore";
import router from "@/router";
import csvToJsonConverter from 'convert-csv-to-json';

const suffix = import.meta.env.VITE_LOCAL_STORAGE_SUFFIX
const isProd = import.meta.env.PROD;
export const CALENDAR_STORE: string = `CALENDAR_STORE_${suffix}`;

const startDate: string = import.meta.env.VITE_START_DATE
let calendarStartDate = startDate || '2023-12-01';
const unwrapAnimationTime = 3100;
const allDaysOpen = [
  1, 2, 3, 4, 5,
  6, 7, 8 , 9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20,
  21, 22, 23, 24, 25
];


// logic for beta / prod storage names

export const useCalendarStore = defineStore(CALENDAR_STORE, () => {

  const daysAmount: number = 25;
  const dayIsOpening: Ref<UnwrapRef<boolean>> = ref(false);
  const calendarYear: Ref<UnwrapRef<string>> = ref('');
  const localStorageName: Ref<UnwrapRef<string>> = ref('');

  const consistent: RemovableRef<consistent> = ref({
    calendarIndex: 1,
    openedDays: [],
  });

  const initStore = (year: string, currentYear: string) => {
    calendarYear.value = year;
    calendarStartDate = `${calendarYear.value}${calendarStartDate.substring(4, calendarStartDate.length)}`;
    
    // console.log('calendarStartDate', calendarStartDate);
    localStorageName.value = `${CALENDAR_STORE}_${calendarYear.value}`;

    const isOldCalendar = currentYear > year;

    fetchGameInfos(year);
    
    const mergedStore = useStorage(localStorageName.value,
      {
        calendarIndex: 1,
        openedDays: isOldCalendar ? allDaysOpen : [],
      }, localStorage,
      // { mergeDefaults: true },
      {
        mergeDefaults: ((storageValue: consistent, defaults: consistent) => {
          // todo logic for 2023 & 2024, etc.
          let calendarIndex = defaults.calendarIndex;
  
          let openedDays = storageValue.openedDays ? storageValue.openedDays : defaults.openedDays;
          if (isOldCalendar) {
            openedDays = allDaysOpen;
          } else {
            if (storageValue.calendarIndex != undefined && storageValue.calendarIndex >= 0) {
              calendarIndex = storageValue.calendarIndex
            }              
          }

          return {
            calendarIndex: calendarIndex > daysAmount ? daysAmount : calendarIndex,
            openedDays,
          } as consistent;
        }),
      },
    );

    consistent.value = mergedStore.value;

    // console.log('init localStorage ', localStorageName.value);
  }


  const showWait = ref<boolean>(false);
  const gameList = ref<object[]>([]);

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

    if (currentYearNr > startYearNr) {
      return true;
    }

    const nowDay = nowString.substring(8, 10)
    const nowDayNumber = Number.parseInt(nowDay, 10); // - 10

    return day <= nowDayNumber
  }

  const isCurrentDayUnlockable = () => {
    const playdateStore = usePlaydateStore();
    const { currentDayMonthYear, currentMonth, currentYear } = storeToRefs(playdateStore);

    return isUnlockable(currentDayMonthYear.value,
      consistent.value.calendarIndex, currentMonth.value, currentYear.value);
  };

  const isCalendarReady = () => {
    const playdateStore = usePlaydateStore();
    const { currentDayMonthYear, currentMonth, currentYear } = storeToRefs(playdateStore);

    const startDay = calendarStartDate.substring(8, 10);
    const dayNumber = Number.parseInt(startDay, 10);

    return isUnlockable(currentDayMonthYear.value, dayNumber, currentMonth.value, currentYear.value);
  }

  const isCalendarActive = computed(() => {
    return false;
  })

  const calendarIndex = computed(() => consistent.value.calendarIndex);
  const openedDays = computed(() => consistent.value.openedDays);

  const showWaitMessage = computed(() => showWait.value)

  const setCalendarIndex = (newIndex: number, updateRoute: boolean = false) => {
    consistent.value.calendarIndex = newIndex;
    if (updateRoute) {
      const dayParam = newIndex.toString();
      router.push({ params: { year: calendarYear.value, day: dayParam }});
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

    const indexDiff = consistent.value.calendarIndex - 1;
    const currentGame = gameList.value[indexDiff] as adventGame;

    if (currentDayUnlocked.value && gameList.value.length > 0) {
      // console.log(gameList.value[indexDiff])
      return currentGame as adventGame;
    }

    
    // don't return the full infos because it's not yet unlocked by the user
    return {
      Day: consistent.value.calendarIndex.toString(),
      Name: `Advent ${consistent.value.calendarIndex}`,
      Discount: '',
      Dev: '',
      Secretwords: currentGame?.Secretwords || '',
      DateConfirmed: '',
      SaleConfirmed: '',
      Url: '',
      DevUrl: '',
      CoverImgUrl: '',
      Catalog: '',
    };
  });

   const fetchGameInfos = async (year: string) => {
    let csvUrl = `https://www.playdate-advent.com/pac_${year}.csv?nocache=${new Date().getTime()}`;
    if (!isProd) {
      csvUrl = `./pac_${year}.csv?nocache=${new Date().getTime()}`;
    }


     try {
      const response = await fetch(csvUrl, {
          method: 'get',
          headers: { 'content-type': 'text/csv;charset=UTF-8',}
      });
      const csvText = await response.text();
      const json = csvToJsonConverter.fieldDelimiter(',').csvStringToJson(csvText);
      gameList.value = json;
       
     } catch (error) {
      console.log(`Error loading ${csvUrl}`);
      console.error(error);
     }
/*
     console.log(gameList.value);
*/
   }

  function triggerWaitMessage() {

   if (!showWaitMessage.value) {
     showWait.value = true;

     setTimeout(() => {
       showWait.value = false;
     }, 2000)
   }
  }

  const rotatedDays = new Map<string, number[]>(Object.entries({ '2023': [22],  '2024': [], '2025': [] }) );

  const currentDayRotated = computed(() => {

    const calYear = calendarYear.value;
    const rotatedDaysPerYear = rotatedDays.get(calYear) || [];

    if (rotatedDaysPerYear.length > 0) {
      const dayNumber = calendarIndex.value;
      return rotatedDaysPerYear.includes(dayNumber)  
    }
    
    return false;
  })

  return {
    initStore,
    calendarIndex, openedDays, dayIsOpening, currentDayRotated,
    setCalendarIndex, updateCalendarIndex,
    openDay, triggerWaitMessage, isCalendarReady,
    currentDayUnlocked, isCurrentDayUnlockable,
    showWaitMessage, selectedGame, daysAmount,
    isCalendarActive, calendarYear,
    localStorageName,
  }

});

