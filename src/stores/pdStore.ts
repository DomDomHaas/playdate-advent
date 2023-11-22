import {computed, type ComputedRef, type Ref, ref, type UnwrapRef} from 'vue'

import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";
import type {RemovableRef} from "@vueuse/core";

import type {consitentPdData} from "../../env";

export enum playdateState {
  CALENDAR = 1,
  GALLERY,
}

export const PD_STORE: string = 'PD_STORE';


export const usePlaydateStore = defineStore(PD_STORE, () => {

  const consistent : RemovableRef<consitentPdData> = useStorage(PD_STORE,
    {
      state: 1,
      themeDark: false,
    }, localStorage,
    { mergeDefaults: true },
  );

  function changeThemeDark(value: boolean){
    consistent.value.themeDark = value;
  }

  const changeToGallery = () => consistent.value.state = playdateState.GALLERY;
  const changeToCalendar = () => consistent.value.state = playdateState.CALENDAR;

  const showGallery : ComputedRef<boolean> = computed(() => consistent.value.state === playdateState.GALLERY);
  const showCalendar : ComputedRef<boolean> = computed(() => consistent.value.state === playdateState.CALENDAR);

  const state : ComputedRef<playdateState> = computed(() => consistent.value.state);
  const themeDark : ComputedRef<boolean> = computed(() => consistent.value.themeDark);

  return {
    state, themeDark, changeThemeDark,
    changeToGallery, changeToCalendar,
    showGallery, showCalendar,
  }
});
