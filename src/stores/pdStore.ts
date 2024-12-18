import moment from 'moment-timezone'
import {computed, ref } from 'vue'
import type {ComputedRef, Ref, UnwrapRef} from 'vue'

import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";
import {useGalleryStore} from "@/stores/galleryStore";
import type {RemovableRef} from "@vueuse/core";

import type {config, consitentPdData} from "../../env";

export enum playdateState {
  CALENDAR = 1,
  GALLERY = 2,
}

const configName = import.meta.env.VITE_CONFIG_NAME; // || 'beta.json';
const appVersion = import.meta.env.VITE_VERSION;

const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(`your local timezone: ${currentTimeZone}`)
const PSTTimeZone: string = 'America/Los_Angeles';

const suffix = import.meta.env.VITE_LOCAL_STORAGE_SUFFIX
export const PD_STORE: string = `PD_STORE_${suffix}`;


export const usePlaydateStore = defineStore(PD_STORE, () => {

  const galleryStore = useGalleryStore();

  let localStorageName: string;
  let consistent : RemovableRef<consitentPdData>;
  
  const initStore = (year: string) => {

    const initYear = year || currentYear.value;
    localStorageName = `${PD_STORE}_${initYear}`;

    consistent = useStorage(localStorageName,
      {
        state: 1,
        themeDark: true,
      }, localStorage,
      { mergeDefaults: true },
    );

    // console.log('PlaydateStore init', localStorageName);
  }

  // const consistent : RemovableRef<consitentPdData> = useStorage(PD_STORE,
  //   {
  //     state: 1,
  //     themeDark: false,
  //   }, localStorage,
  //   { mergeDefaults: true },
  // );

  function changeThemeDark(value: boolean){
    consistent.value.themeDark = value;
  }

  const config: Ref<UnwrapRef<config>> = ref({ version: '1.0.0'});
  const localDateTime: Ref<UnwrapRef<string>> = ref(moment().format());

  setInterval(() => {
    localDateTime.value = moment().format();
  }, 1000);

  const currentDateTime: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('h:mm:ss a - DD. MMM');
  });

  const currentTime: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('h:mm:ss a');
  });

  const currentDayMonth: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('DD. MMM');
  });

  const currentDayOnly: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('DD');
  });

  const currentMonth: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('MM');
  });

  const currentYear: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('YYYY');
  });

  const currentDayMonthYear: ComputedRef<string> = computed(() => {
    return moment.tz(localDateTime.value, PSTTimeZone).format('YYYY-MM-DD');
  });

  const changeToGallery = () => {
    consistent.value.state = playdateState.GALLERY;
    galleryStore.resetGalleryIndex();
  }

  const changeToCalendar = () => consistent.value.state = playdateState.CALENDAR;

  const showGallery : ComputedRef<boolean> = computed(() => consistent.value.state === playdateState.GALLERY);
  const showCalendar : ComputedRef<boolean> = computed(() => consistent.value.state === playdateState.CALENDAR);

  const state : ComputedRef<playdateState> = computed(() => consistent.value?.state);
  const themeDark : ComputedRef<boolean> = computed(() => consistent.value?.themeDark);

  const isVersionOutdated: ComputedRef<boolean> = computed(() => {
    return config.value.version > appVersion;
  });

  const fetchConfig = async () => {
    const configUrl = `/${configName}?nocache=${new Date().getTime()}`;
    const response = await fetch(configUrl);
    config.value = await response.json();
/*
    console.log(config.value);
*/
  }

  setInterval(() => {
    fetchConfig();
  }, 5000)

  return {
    initStore,
    state, themeDark,
    currentDateTime, currentDayMonth, currentDayOnly,
    currentMonth, currentDayMonthYear, currentYear, currentTime,
    changeThemeDark, changeToGallery, changeToCalendar,
    showGallery, showCalendar,
    config, isVersionOutdated,
  }
});
