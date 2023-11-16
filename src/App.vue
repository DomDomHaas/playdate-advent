<script setup lang="ts">

import PlaydatePage from "@/components/playdatePage.vue";
import GameView from "@/components/gameView.vue";
import {ref} from "vue";
import {BUTTON_A} from "@/interaction";

let selectionIndex = ref(2)
const openedDays = ref<any[]>([])
const daysAmount = 24;

const catchPad = (upOrDown: number, leftOrRight: number) => {
  // console.log('upOrDown ' + upOrDown);
  // console.log('leftOrRight ' + leftOrRight);
  if (upOrDown !== 0) {
    selectionIndex.value += upOrDown * 6;
  }
  if (leftOrRight !== 0) {
    selectionIndex.value += leftOrRight;
  }

  if (selectionIndex.value <= 0) {
    if (selectionIndex.value < 0) {
      selectionIndex.value = daysAmount + selectionIndex.value;
    } else {
      selectionIndex.value = daysAmount;
    }
  } else if (selectionIndex.value > daysAmount) {
    if (selectionIndex.value > daysAmount + 1) {
      selectionIndex.value = selectionIndex.value - daysAmount;
    } else {
      selectionIndex.value = 0;
    }
  }

  // console.log(selectionIndex.value)
}

const catchButton = (buttonName: string) => {
  if (buttonName === BUTTON_A) {
    if (!openedDays.value.includes(selectionIndex.value)) {
      openedDays.value.push(selectionIndex.value);
    }
  }
}
</script>

<template>

  <div class="pageGrid">
    <div class="left">
      <h3>Left Side</h3>
      Hello / Welcome Text
      And give info how it works
    </div>

    <div class="middle">
      <div class="playdate">
        <PlaydatePage :selection="selectionIndex"
                      :daysAmount="daysAmount"
                      :openedDays="openedDays"
                      @dPadClick="catchPad"
                      @buttonClick="catchButton" />
      </div>

      <div class="game">
        <GameView :gameTitle="`Game ${selectionIndex}`"
                  :unlocked="openedDays.includes(selectionIndex)"
                  :day="selectionIndex"
                  url="" />
      </div>
    </div>

    <div class="right">
      Community links, discord etc.
      Credits
    </div>
  </div>

</template>

<style>
  body {
    height: 100vh;
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
