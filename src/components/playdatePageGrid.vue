<script setup lang="ts">
import pgBg from "@/assets/pdBackground.png";

import CalendarView from "@/components/calendarView.vue";
import ConsoleView from "@/components/consoleView.vue";
import GalleryView from "@/components/galleryView.vue";
import GameView from "@/components/gameView.vue";

import { Row, Col } from 'ant-design-vue';
import {useCalendarStore} from "@/stores/calendarStore";
import {usePlaydateStore} from "@/stores/pdStore";
import {useRoute} from "vue-router";
import {watch, computed, type Ref} from "vue";
import {storeToRefs} from "pinia";
import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

const calendarStore = useCalendarStore();
const { openedDays } = storeToRefs(calendarStore);
const { setCalendarIndex } = calendarStore;
const playdateStore = usePlaydateStore();
const { themeDark } = storeToRefs(playdateStore);
const breaks: Ref<ScreenMap> = useBreakpoint();

const route = useRoute();

watch<string, boolean>((): any => route.params.day,
  async (newDay, oldDay) => {
    const newDayNumber: number = Number.parseInt(newDay, 10);
    setCalendarIndex(newDayNumber, false);
  }
)


const catchPad = (upOrDown: number, leftOrRight: number) => {
  emit('dPadClick', upOrDown, leftOrRight);
}

const catchButton = (buttonName: string) => {
  emit('buttonClick', buttonName);
}

const emit = defineEmits<{
  dPadClick: [upOrDown: number, leftOrRight: number] // named tuple syntax
  buttonClick: [buttonName: string]
}>()

const isPlaydateRotated = computed(() => {
  return calendarStore.currentDayRotated && playdateStore.showGallery
})

const xsLayout = computed(() => breaks.value.xs && !breaks.value.sm)


</script>

<template>
  <div id="CoverWrap"
        class="coverWrap"
        :class="themeDark ? 'pdCover' : 'pdCoverInverted'">

    <Row :gutter="[8, 10]">

      <Col v-if="!themeDark"
           id="top"
           :span="24">
        <GameView />
      </Col>

      <Col v-if="!themeDark"
           :span="24"
           class="coverSpace">
      </Col>

      <Col span="24"
           :flex="xsLayout ? '400px' : ''"
            id="middle"
           class="playdateInCover"
      >
        <ConsoleView class=""
                     @dPadClick="catchPad"
                     @buttonClick="catchButton">

        </ConsoleView>

        <CalendarView v-show="playdateStore.showCalendar"
                      :selection="calendarStore.calendarIndex"
                      :daysAmount="calendarStore.daysAmount"
                      :openedDays="openedDays"
                      :showWaitMessage="calendarStore.showWaitMessage"
        >
        </CalendarView>

        <GalleryView v-show="playdateStore.showGallery"  >

        </GalleryView>

        <img class="pdBackground"
             :class="isPlaydateRotated ? 'rotatedBg' : ''"
             :src="pgBg"
             alt="background playdate screen" />

      </Col>

      <Col v-if="themeDark"
           :span="24"
            class="coverSpace">
      </Col>

      <Col v-if="themeDark"
           id="bottom"
           :span="24">
        <GameView />
      </Col>

    </Row>
  </div>

</template>

<style>
  .calenderGrid {
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 5px;
    /*
    gap: 5px;
    */
    width: 400px;
    height: 238px;
    padding: 36px 0 0 30px;
    z-index: 1;
  }

  .playdateFrame {
    /*
    height: 489px;
    width: 527px;
    */
    height: 541px;
    width: 560px;
    aspect-ratio: 560 / 541;
  }

  .gallery {
    position: absolute;
    top: 0;
    width: 400px;
    height: 238px;
    padding: 36px 0 0 34px;
    z-index: 1;
  }

  .playdateInCover {
    padding: 0 10px 10px !important;
  }

  .pdBackground {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    padding: 33px 0 0 40px;

    height: 248px;
    width: 408px;
  }

  .coverWrap {
    padding: 0 10px;
    border-radius: 25px;
    width: 530px;
    margin: auto;
  }

  /*
  @media (max-width: 530px) {
    .coverWrap {
      width: 100%;
    }
  }


  @media (max-width: 400px) {
    .playdateFrame {
      width: 365px;
      height: 352px;
    }
  }
  */

  @media (max-width: 560px) {
    .playdateFrame {
      width: 400px;
      height: 386px;
    }

    .console {
      width: 400px;
      height: 386px;
    }

    .playdateInCover {
      padding: 0 !important;
      width: 400px !important;
    }

    .coverWrap {
      width: 95%;
    }

    .gallery,
    .pdBackground {
      /*
      width: 75%;
      */
      width: 295px;
      height: 180px;
    }

    .calenderGrid {
      /*
      width: 270px;
      */
      width: 285px;
      height: 175px;
      row-gap: 0;
      padding: 24px 0 0 24px !important;
    }

    .gallery,
    .pdBackground {
      padding: 21px 0 0 21px !important;
    }


  }

</style>

<style scoped>


  /*
  @media (max-height: 920px) {
    .coverWrap {
      background-color: black;
    }
  }
  */


  /*
  @media (max-width: 1024px) {
    .coverWrap {
    }
  }
  */

  .coverSpace {
    background-color: black;
    border-radius: 25px;
    opacity: 0.35;
    height: 10px;
  }


  .rotatedBg {
    height: 410px !important;
    width: 245px !important;
    padding: 45px 0 0 264px !important;
  }

  @media (max-width: 560px) {

    .rotatedBg {
      height: 290px !important;
      width: 178px !important;
      padding: 16px 0 0 196px !important;
    }
  }

</style>
