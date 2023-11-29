<script setup lang="ts">
import {BUTTON_A, BUTTON_B} from "@/interaction";
import {Row, Col, Switch} from 'ant-design-vue';

import {useCalendarStore} from "@/stores/calendarStore";
import {useGalleryStore} from "@/stores/galleryStore";
import {usePlaydateStore} from "@/stores/pdStore";
import {storeToRefs} from "pinia";
import type {Ref, UnwrapRef} from 'vue'
import {nextTick, onMounted, ref} from "vue";
import {BulbFilled, BulbOutlined} from "@ant-design/icons-vue";
import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";

import CommunityView from "@/components/communityView.vue";
import WelcomeView from "@/components/welcomeView.vue";
import PlaydatePageGrid from "@/components/playdatePageGrid.vue";

const playdateStore = usePlaydateStore();
const calendarStore = useCalendarStore();
const galleryStore = useGalleryStore();
const { themeDark } = storeToRefs(playdateStore);

const breaks: Ref<ScreenMap> = useBreakpoint();

let isMounted: Ref<UnwrapRef<boolean>> = ref(false);

onMounted(() => {
  nextTick(() => {
    isMounted.value = true;
  });
})

const changeTheme = (checked: boolean) => {
  playdateStore.changeThemeDark(checked);
}

const catchPad = (upOrDown: number, leftOrRight: number) => {
  if (playdateStore.showCalendar) {
    calendarStore.updateCalendarIndex(upOrDown, leftOrRight);
/*
    console.log('calendarIndex')
    console.log(calendarStore.calendarIndex)
*/
  }

  if (playdateStore.showGallery) {
    galleryStore.updateGalleryIndex(leftOrRight);
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

</script>

<template>

<!--
  <Row class="navBar">
    <Col span="24">
      <TheNavBar />
    </Col>
  </Row>
-->

  <Row :gutter="[8, 8]"
        class="mainContent">

    <Col :xs="{ order: 2, span: 24 }"
         :sm="{ order: 1, span: 7 }">

      <Row :gutter="[15, 20]">
        <Col :span="24"
              id="xs-switch">

        </Col>
        <Col :span="24"
             justify="middle"
              class="welcomeTitle">
          <div style="color: #FFC900;">play</div>
          <div style="position: relative; left: 3px; top: 5px; color: #FFB200;">date</div>
          <div style="position: relative; left: 14px; top: -5px; " :class="themeDark ? 'pdTitleColor' : 'pdTitleColor'">advent</div>
        </Col>

        <Col :span="24">
          <welcome-view ></welcome-view>
        </Col>
        <!-- useBreakpoints? to move the community-view
         here for the sm breakpoint? -->

        <Col :span="24"
             id="xs-community">

        </Col>

      </Row>
    </Col>

    <Col :xs="{ order: 1, span: 24 }"
         :sm="{ order: 2, span: 10 }">
<!--
    <Col flex="560px" >
-->
      <PlaydatePageGrid @dPadClick="catchPad"
                        @buttonClick="catchButton" />
    </Col>

    <Col :xs="{ order: 3, span: 24 }"
         :sm="{ order: 3, span: 7 }">
      <Row>
        <Col :span="24"
             id="sm-switch" >
          <Teleport :to="themeDark ? '#xs-switch' : '#sm-switch'"
                    :disabled="!isMounted">
            <Switch :checked="themeDark"
                    class="white-text"
                    @click="changeTheme"
            >
              <template #checkedChildren><BulbFilled/></template>
              <template #unCheckedChildren><BulbOutlined/></template>
            </Switch>
          </Teleport>
        </Col>

        <Col :span="24"
             id="sm-community" >
          <Teleport :to="themeDark ? '#xs-community' : '#sm-community'"
                    :disabled="!isMounted">
            <community-view ></community-view>
          </Teleport>
        </Col>
      </Row>
    </Col>

  </Row>

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

  .playdateFrame {
    /*
    height: 489px;
    width: 527px;
    */
    height: 541px;
    width: 560px;
  }

  .appCard {
    background-color: indianred;
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

  .pdCoverInverted {
    background-color: #7353D2;
  }
</style>

<style scoped>

  .welcomeTitle {
    font-size: 5rem;
    line-height: 0.7em;
    padding: 20px !important;
  }

  .mainContent {
    height: 100%;
    width: 100%;
    background-color: #214646;
  }

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

</style>
