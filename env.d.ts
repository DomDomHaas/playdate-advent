/// <reference types="vite/client" />

import type {playdateState} from "@/stores/pdStore";

export type adventGame = {
  Day: string,
  Name: string,
  Discount: string,
  Dev: string,
  Secretwords: string,
  DateConfirmed: string,
  SaleConfirmed: string,
  Url: string,
  DevUrl: string,
  CoverImgUrl: string,
  Catalog: string,
}

export type consistent = {
  calendarIndex: number,
  openedDays: number[],
}

export type consitentPdData = {
  state: playdateState,
  themeDark: boolean,
}

export type config = {
  version: string,
}
