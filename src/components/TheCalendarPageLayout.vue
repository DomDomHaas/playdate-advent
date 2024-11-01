<template>
  <div id="TheCalenderPageLayout"
    :style="xxlAndUpLayout ? 'height: 100%;' : '' ">

    <div v-if="lgLayout"
         class="calendarBG"
         :style="`background: url(${calendarBG}); repeat: no-repeat;`"
    >
      <!--
          <img :src="calendarBG" alt="background" />
      -->
    </div>



    <Row v-if="!calendarStore.isCalendarReady"
         :gutter="[16, 16]"
         style="height: 100vh;">

      <Col :xs="{ span: 24 }"
           :md="{ span: 8 }"
           class="welcomeTitle">
        <slot name="title" />
      </Col>

      <Col :xs="{ span: 24 }"
           :md="{ span: 8 }"
           style="line-height: 0.8em; text-align: center; font-size: 3rem;"
           id="middleText"
           class="welcomeTitle">

        <div class="playdateYellowBright" >
          Coming
        </div>
        <div class="playdateYellowDark" >
          1st Dec
        </div>
      </Col>

      <Col :xs="{ span: 24 }"
           :md="{ span: 8 }"
           class="welcomeTitle">
        <slot name="timing" />
      </Col>

      <Col :xs="{ span: 24 }"
           :md="{ span: 8 }">
        <slot name="version" />
      </Col>
    </Row>


    <Row v-if="calendarStore.isCalendarReady && xsAndSmLayout"
         :gutter="[8, 24]"
         class="mainContentXs"
         id="mainRow">

      <Col :span="24"
           class="welcomeTitle">
        <slot name="title" />
      </Col>

      <Col :span="24"
           id="infoCol">
        <slot name="welcomeInfo" />
      </Col>

      <Col :span="24"
           style="padding: 0 10px;"
           class="white-text">
        <slot name="timeDetailed" />
      </Col>

      <Col :span="24"
           id="playdateCol">
        <slot name="playdate" />
      </Col>

      <Col :span="24" >
        <slot name="lightSwitch" />
      </Col>

      <Col :span="24"
           id="communityCol">
        <slot name="community" />
      </Col>

      <Col :span="24" >
        <slot name="credits" />
      </Col>

      <Col :span="24">
        <slot name="version" />
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
            <slot name="title" />
          </Col>

          <Col :span="24">
            <slot name="lightSwitch" />
          </Col>

          <Col :span="24" >
            <slot name="welcomeInfo" />
          </Col>

          <Col :span="24"
               id="communityCol">
            <slot name="community" />
          </Col>

          <Col :span="24">
            <slot name="version" />
          </Col>

        </Row>
      </Col>

      <Col :span="14"
           id="playdateCol">

        <Row :gutter="[0, 20]">
          <Col :span="24" >
            <slot name="playdate" />
          </Col>

          <Col :span="24">
            <slot name="credits" />
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
            <slot name="title" />
          </Col>

          <Col :span="24" >
            <slot name="lightSwitch" />
          </Col>

          <Col :span="24">
            <slot name="welcomeInfo" />
          </Col>

          <Col :span="24">
            <slot name="version" />
          </Col>
        </Row>
      </Col>

      <Col :span="10"
           id="playdateCol">
        <slot name="playdate" />
      </Col>

      <Col :span="7"
           id="communityCol">

        <Row :gutter="[24, 24]" >

          <Col :span="24"
               class="welcomeTitle">
            <slot name="timing" />
          </Col>

          <Col :span="24" >
            <slot name="community" />
          </Col>

          <Col :span="24" >
            <slot name="credits" />
          </Col>
        </Row>
      </Col>

    </Row>

  </div>
</template>

<script setup lang="ts">

  import calendarBG from "@/assets/calendarBGTexture.png";
  import {Col, Row} from "ant-design-vue";
  import {useCalendarStore} from "@/stores/calendarStore";
  import {computed, type Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

  const calendarStore = useCalendarStore();

  const breaks: Ref<ScreenMap> = useBreakpoint();
  const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)
  const mdLayout = computed(() => (breaks.value.md || breaks.value.lg) && !breaks.value.xl)
  const lgLayout = computed(() => breaks.value.xl)

  const xxlAndUpLayout = computed(() => breaks.value.xxl)

</script>

<style>
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
  /*
  font-size: 5rem;
  line-height: 0.7em;
  */
  height: 200px;
  padding: 10px 20px !important;
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
