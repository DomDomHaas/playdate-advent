<script setup lang="ts">
import {Layout, LayoutHeader, LayoutContent} from 'ant-design-vue';

import TheNavBar from './components/TheNavBar.vue';
import { provide } from 'vue';


const calendarYears = [
    '2023',
    '2024',
    '2025',
/*
    '2026',
    '2027',
    '2028',
*/
  ];

  calendarYears.reverse();

  provide<string[]>('calendarYears', calendarYears);

</script>

<template>
  <Layout
    id="mainLayout"
    class="mainLayout"
    >
    <!-- :class="themeDark ? 'scrollColor' : 'scrollColorInverted'" -->

    <LayoutHeader id="headerLayout" class="headerLayout">
      <TheNavBar :calendarYears="calendarYears"/>
    </LayoutHeader>

    <LayoutContent id="calendarLayout" class="calendarLayout">
      <router-view>

      </router-view>
    </LayoutContent>
  </Layout>
</template>

<style>

  .mainLayout {
    position: relative;
  }

  .calendarLayout {
    position: relative;
    top: 32px;
    z-index: 0;
    height: calc(100vh - 32px);
    overflow: auto;
    scrollbar-width: thin;
    scroll-behavior: smooth;
  }

  .headerLayout {
    position: fixed;
    z-index: 1;
    width: 100%;
  }

  body {
    overflow: hidden;
    margin: 0;
  }

  #app {
    font-family: 'Libre Franklin', sans-serif;
  }

  .appCard {
    background-color: #efe8bb;
    /*
    background-color: #CD5C5C;
    */
  }

  .appCard .ant-card-head {
    padding: 0 12px;
    font-size: 1.2em;
  }

  .appCard .ant-card-head-title {
    white-space: break-spaces;
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

  .pdBorderColor,
  .pdBorderColor .ant-card-head
  {
    border-color: #11AC8E;
  }

  .pdBorderColorInverted,
  .pdBorderColorInverted .ant-card-head {
    border-color: #7353D2;
  }

  .pdLinkColor a {
    color: #11AC8E;
    text-decoration: underline;
  }

  .pdLinkColorInverted a {
    color: #7353D2;
    text-decoration: underline;
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

  .scrollColor {
    color: #11AC8E;
  }

  .scrollColorInverted {
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

  header {
    background-color: #214646 !important;
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
