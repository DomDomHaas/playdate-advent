<script setup lang="ts">

import PlaydatePage from "@/components/playdatePage.vue";
import GameView from "@/components/gameView.vue";
import {BUTTON_A, BUTTON_B} from "@/interaction";

import CommunityView from "@/components/communityView.vue";
import WelcomeView from "@/components/welcomeView.vue";
import {usePlaydateStore, useCalendarStore, useGalleryStore} from "@/stores/store";

const playdateStore = usePlaydateStore();
const calendarStore = useCalendarStore();
const galleryStore = useGalleryStore();

const catchPad = (upOrDown: number, leftOrRight: number) => {
  if (playdateStore.showCalendar) {
    calendarStore.updateCalendarIndex(upOrDown, leftOrRight);
    console.log('calendarIndex')
    console.log(calendarStore.calendarIndex)
  }

  if (playdateStore.showGallery) {
    galleryStore.updateScreenshotIndex(leftOrRight);
    console.log('screenshotIndex')
    console.log(galleryStore.screenshotIndex)
  }

}

const catchButton = (buttonName: string) => {
  if (buttonName === BUTTON_A) {
    calendarStore.openDay(calendarStore.calendarIndex);
    playdateStore.changeToGallery();
  }

  if (buttonName === BUTTON_B) {
    playdateStore.changeToCalendar();
  }
}


</script>

<template>

  <div class="pageGrid">
    <div class="left">
      <welcome-view />
    </div>

    <div class="middle">
      <div class="playdate">
        <PlaydatePage :selection="calendarStore.calendarIndex"
                      @dPadClick="catchPad"
                      @buttonClick="catchButton" />
      </div>

      <div class="game">
        <GameView :gameTitle="calendarStore.selectedGame.name"
                  :unlocked="calendarStore.currentDayUnlocked"
                  :day="calendarStore.calendarIndex"
                  :url="calendarStore.selectedGame.url"
                  :iframe="calendarStore.selectedGame.iframe"
        />
      </div>
    </div>

    <div class="right">
      <community-view />
    </div>
  </div>

</template>

<style>
  body {
    height: 100vh;
    margin: 0;
  }

  #app {
    height: 100%;
  }
</style>

<style scoped>

  .pageGrid {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-areas: "left middle right";
    background-color: dimgray;
  }

  @media (max-width: 1024px) {
    .pageGrid {
      grid-template-columns: 1fr;
      grid-template-rows: 2fr auto;
      grid-template-areas:
        "middle"
        "left"
        "right";
    }
  }

  @media (min-width: 1024px) {
    .pageGrid {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: 1fr;

    }
  }

  .left {
    grid-area: left;
/*    background-color: floralwhite;*/
  }

  .middle {
    display: grid;
    grid-area: middle;
    grid-template-rows: 489px auto;
    /*
    height: 489px;
    */
    width: 527px;
    grid-template-columns: 1fr;
    grid-template-areas:
        "playdate"
        "game";
  }

  @media (max-width: 489px) {
    .middle {
      grid-template-rows: 2fr 1fr !important;
    }
  }

  .right {
    grid-area: right;
/*    background-color: floralwhite;*/
  }
  .playdate {
    grid-area: playdate;
    background-color: darkkhaki;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    height: 100%;
  }

  .game {
    grid-area: game;
    background-color: floralwhite;
  }

</style>
