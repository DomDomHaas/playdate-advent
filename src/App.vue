<script setup lang="ts">
import type {Ref} from 'vue'
import {computed} from "vue";


function reloadApp() {
  window.location.reload();
}

const calendars = [
  '2023',
  '2024',
/*
  '2025',
  '2026',
  '2027',
  '2028',
*/
];
calendars.reverse();



</script>

<template>

  <router-view>

  </router-view>

<!--
  <TheCalendarPage v-if="calendarStore.isCalendarReady" />

  <TheCalendarOverview v-if="!calendarStore.isCalendarReady" />
-->

</template>

<style>
  body {
    height: 100vh;
    margin: 0;
  }

  #app {
    height: 100%;
    font-family: 'Libre Franklin', sans-serif;
  }

  .appCard {
    background-color: #d76565;
    /*
    background-color: #CD5C5C;
    */
  }

  .appCard .ant-card-head {
    padding: 0 12px;
    font-size: 1.2em;
  }

  .appCard .ant-card-body {
    padding: 12px;
  }

  @media (max-width: 768px) {
    .appCard {
      width: 550px;
      max-width: 100%;
    }
  }

  .playdateYellowBright {
    color: #FFC900;
  }

  .playdateYellowDark {
    color: #FFB200;
  }

  .appCard a {
    color: #FFC900;
  }

  .appCardText {
    font-size: 1.1rem;
  }

  .white-text {
    color: white;
  }

  .black-text {
    color: black;
  }

  .pdTitleColor {
    color: #11AC8E;
  }

  .pdTitleColorInverted {
    color: #7353D2;
  }

  .pdCover {
    background-color: #11AC8E;
  }

  .dPadButton.pdCover,
  .pdButton.pdCover {
    border-color: rgba(17, 172, 142, 0.75);
    background-color: rgba(17, 172, 142, 0.1);
  }

  .pdCoverInverted {
    background-color: #7353D2;
  }

  .dPadButton.pdCoverInverted,
  .pdButton.pdCoverInverted {
    border-color: rgba(115, 83, 210, 0.75);
    background-color: rgba(115, 83, 210, 0.15);
  }

</style>

<style scoped>

  main {
    padding: 10px;
    /*
    background-color: #214646;
    */
    background-color: #285252;
  }

  .calendarBG {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.35;
    /*
    width: 2149px;
    height: 1355px;
    */
    width: 100%;
    height: 100%;
  }

  .calendarBG > img {
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 560px) {
    main {
      padding: 5px;
    }
  }

  .welcomeTitle {
    font-size: 5rem;
    line-height: 0.7em;
    padding: 10px 20px !important;
    height: 200px;
  }

  .mainContent {
    height: 100%;
    width: 100%;
  }
  
  /*
  .mainContentXs, .mainContentSm, .mainContent {
    background-color: #214646;
  }
  */

  .navBar {
    /*
    background-color: indianred;
    */
  }

  .pageGrid {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-areas: "left middle right";
    background-color: #214646;
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
    grid-template-rows: 541px auto;
    /*
    height: 489px;
    */
    width: 560px;
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
    /*
    background-color: darkkhaki;
    */

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    height: 100%;
  }

  .game {
    grid-area: game;
    background-color: floralwhite;
  }

  .reloadPopup {
    position: fixed;
    top: 10px;
    left: 10px;
  }

</style>
