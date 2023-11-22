/// <reference types="vite/client" />

export type adventGame = {
  Day: string,
  Name: string,
  Discount: string,
  Dev: string,
  "Secret words": string,
  "Date confirmed": string,
  "Sale confirmed": string,
  Url: string,
  CatalogUrl: string,
  Iframe: string,
}

export type consistent = {
  calendarIndex: number,
  openedDays: number[],
}

export type consitentPdData = {
  state: playdateState,
  themeDark: boolean,
}
