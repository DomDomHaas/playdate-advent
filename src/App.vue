<script setup lang="ts">
import {BUTTON_A, BUTTON_B} from "@/interaction";
import {Row, Col, Card} from 'ant-design-vue';

import {useCalendarStore} from "@/stores/calendarStore";
import {useGalleryStore} from "@/stores/galleryStore";
import {usePlaydateStore} from "@/stores/pdStore";
import {storeToRefs} from "pinia";
import type {Ref} from 'vue'
import {computed} from "vue";

import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";

import CommunityView from "@/components/communityView.vue";
import WelcomeView from "@/components/welcomeView.vue";
import PlaydatePageGrid from "@/components/playdatePageGrid.vue";
import calendarBG from "@/assets/calendarBGTexture.png";
import LightSwitch from "@/components/lightSwitch.vue";
import PdTime from "@/components/pdTime.vue";
import PdTitle from "@/components/pdTitle.vue";
import CreditsView from "@/components/creditsView.vue";
import TheCalendarPage from "@/components/TheCalendarPage.vue";

const playdateStore = usePlaydateStore();
const calendarStore = useCalendarStore();
const galleryStore = useGalleryStore();
const { themeDark } = storeToRefs(playdateStore);

const breaks: Ref<ScreenMap> = useBreakpoint();


const catchPad = (upOrDown: number, leftOrRight: number) => {
  if (playdateStore.showCalendar) {
    calendarStore.updateCalendarIndex(upOrDown, leftOrRight);
/*
    console.log('calendarIndex')
    console.log(calendarStore.calendarIndex)
*/
  }

  if (playdateStore.showGallery) {
    galleryStore.updateGalleryIndex(upOrDown, leftOrRight);
/*
    console.log('screenshotIndex')
    console.log(galleryStore.screenshotIndex)
*/
  }

}

const catchButton = (buttonName: string) => {
  if (buttonName === BUTTON_A) {
    if (calendarStore.isCurrentDayUnlockable) {
      calendarStore.openDay(calendarStore.calendarIndex);
      playdateStore.changeToGallery();
    } else {
      calendarStore.triggerWaitMessage();
    }
  }

  if (buttonName === BUTTON_B) {
    playdateStore.changeToCalendar();
  }
}

const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)
const mdLayout = computed(() => (breaks.value.md || breaks.value.lg) && !breaks.value.xl)
const lgLayout = computed(() => breaks.value.xl)

const xxlAndUpLayout = computed(() => breaks.value.xxl)

const version = import.meta.env.VITE_VERSION

function reloadApp() {
  window.location.reload();
}

const calendars = ['2023', '2024', '2025', '2026', '2027', '2028'];

const calenderTimeline = computed(() => {
  const timeline = [];

  const entries = calendars.length * 2 - 1;
  let calIndex = -1;

  for (let i = 0; i < entries; i++) {
    const addCalTitle = i % 2 == 0;

    if (addCalTitle) {
      calIndex = calIndex + 1;
      timeline[i] = calendars[calIndex];
    } else {
      timeline[i] = 'delimiter';
    }
  }

  return timeline;
})

const calendarClick = (event: any) => {
  console.log(event)
}

</script>

<template>

<!--
<main :style="xxlAndUpLayout ? 'height: 100%;' : '' ">

  <div v-if="lgLayout"
       class="calendarBG"
       :style="`background: url(${calendarBG}); repeat: no-repeat;`"
  >
&lt;!&ndash;
    <img :src="calendarBG" alt="background" />
&ndash;&gt;
  </div>



  <Row v-if="!calendarStore.isCalendarReady"
        :gutter="[16, 16]"
        style="height: 100vh;">

    <Col :xs="{ span: 24 }"
         :md="{ span: 8 }"
         class="welcomeTitle">
        <PdTitle :theme-dark="themeDark" />
    </Col>

    <Col :xs="{ span: 24 }"
         :md="{ span: 8 }"
         style="line-height: 0.8em; text-align: center;"
         class="welcomeTitle">

      <div class="playdateYellowBright" >
        {{ 'Coming' }}

      </div>
      <div class="playdateYellowDark" >
        {{ '1st Dec' }}
      </div>
    </Col>

    <Col :xs="{ span: 24 }"
         :md="{ span: 8 }"
         class="welcomeTitle">
      <pd-time :themeDark="themeDark"/>
    </Col>

    <Col :xs="{ span: 24 }"
         :md="{ span: 8 }">
      version: {{ version }}
    </Col>
  </Row>


  <Row v-if="calendarStore.isCalendarReady && xsAndSmLayout"
       :gutter="[8, 24]"
       class="mainContentXs"
       id="mainRow">

    <Col :span="24"
         class="welcomeTitle">
      <PdTitle :theme-dark="themeDark" />
    </Col>

&lt;!&ndash;
    <Col>
      <Button >Go To Calendar</Button>
    </Col>
&ndash;&gt;

    <Col :span="24"
         id="infoCol">
      <welcome-view />
    </Col>

    <Col :span="24"
          style="padding: 0 10px;"
          class="white-text">
      <Time />
    </Col>

    <Col :span="24"
         id="playdateCol">
      <Popconfirm :open="playdateStore.isVersionOutdated"
                  title="New Calendar version available, please reload!"
                  ok-text="Reload"
                  placement="top"
                  @confirm="reloadApp"
      >
      </Popconfirm>
      <PlaydatePageGrid @dPadClick="catchPad"
                        @buttonClick="catchButton" />
    </Col>

    <Col :span="24" >
      <LightSwitch />
    </Col>

    <Col :span="24"
         id="communityCol">
      <community-view />
    </Col>

    <Col :span="24" >
      <credits-view />
    </Col>

    <Col :span="24">
      version: {{ version }}
    </Col>

  </Row>

  <Row v-if="calendarStore.isCalendarReady && mdLayout"
        :gutter="[8, 8]"
        class="mainContentSm"
        id="mainRow">

    <Col :span="10"
         id="infoCol">

      <Row :gutter="[15, 20]">
        <Col :span="24"
             class="welcomeTitle">
          <PdTitle :theme-dark="themeDark" />
        </Col>

        <Col :span="24">
          <Popconfirm :open="playdateStore.isVersionOutdated"
                      title="New Calendar version available, please reload!"
                      ok-text="Reload"
                      placement="bottom"
                      @confirm="reloadApp"
          >
            <LightSwitch />
          </Popconfirm>
        </Col>

        <Col :span="24" >
          <welcome-view />
        </Col>

        <Col :span="24"
             id="communityCol">
          <community-view />
        </Col>

        <Col :span="24">
          version: {{ version }}
        </Col>

      </Row>
    </Col>

    <Col :span="14"
         id="playdateCol">

      <Row :gutter="[0, 20]">
        <Col :span="24" >
          <PlaydatePageGrid @dPadClick="catchPad"
                            @buttonClick="catchButton" />
        </Col>

        <Col :span="24">
          <credits-view style="width: 530px; margin: auto"/>
        </Col>
      </Row>


    </Col>


  </Row>

  <Row v-if="calendarStore.isCalendarReady && lgLayout"
        :gutter="[16, 16]"
        class="mainContent"
        id="mainRow">

    <Col :span="7"
          id="infoCol">

      <Row :gutter="[15, 20]">

        <Col :span="24"
              class="welcomeTitle">
          <PdTitle :theme-dark="themeDark" />
        </Col>

        <Col :span="24" >
          <Popconfirm :open="playdateStore.isVersionOutdated"
                      title="New Calendar version available, please reload!"
                      ok-text="Reload"
                      placement="bottom"
                      @confirm="reloadApp"
          >
            <LightSwitch />
          </Popconfirm>
        </Col>

        <Col :span="24">
          <welcome-view ></welcome-view>
        </Col>

        <Col :span="24">
          version: {{ version }}
        </Col>
      </Row>
    </Col>

    <Col :span="10"
          id="playdateCol">

      <PlaydatePageGrid @dPadClick="catchPad"
                        @buttonClick="catchButton" />

    </Col>

    <Col :span="7"
          id="communityCol">

      <Row :gutter="[24, 24]" >

        <Col :span="24"
             class="welcomeTitle">
          <pd-time :themeDark="themeDark"/>
        </Col>

        <Col :span="24" >
          <community-view />
        </Col>

        <Col :span="24" >
          <credits-view />
        </Col>
      </Row>
    </Col>

  </Row>

</main>
-->

<!--
  <TheCalendarPage />
-->

  <TheCalendarPage v-if="calendarStore.isCalendarActive"/>

  <div>
    <Row style="align-items: center;"
        :gutter="[16,8]">
      <Col v-for="(title, index) in calenderTimeline"
        :span="title === 'delimiter' ? 2 : 5"
          >
        <div v-if="title === 'delimiter'" >
          <hr>
        </div>
        <div v-else
              style="text-align:center; ">
          <pd-title :calendar-year="title"
                    :theme-dark="false"
                    :show-title="true"
                    :clickable="true"
                    @clicked="calendarClick"
          />
        </div>
      </Col>
    </Row>
  </div>

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
