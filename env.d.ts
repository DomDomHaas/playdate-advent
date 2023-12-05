/// <reference types="vite/client" />

import type {playdateState} from "@/stores/pdStore";

export type adventGame = {
  Day: string,
  Name: string,
  Discount: string,
  Dev: string,
  "Secret words": string,
  "Date confirmed": string,
  "Sale confirmed": string,
  Url: string,
  DevUrl: string,
  Iframe: string,
  IframeMobile: string,
  Notes: string,
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
