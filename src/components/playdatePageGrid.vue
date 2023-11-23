<script setup lang="ts">
import pgBg from "@/assets/pdBackground.png";

import CalendarView from "@/components/calendarView.vue";
import ConsoleView from "@/components/consoleView.vue";
import GalleryView from "@/components/galleryView.vue";
import { Row, Col } from 'ant-design-vue';

import {useCalendarStore} from "@/stores/calendarStore";
import {usePlaydateStore} from "@/stores/pdStore";
import {useRoute} from "vue-router";
import {watch} from "vue";
import {storeToRefs} from "pinia";

const emit = defineEmits<{
  dPadClick: [upOrDown: number, leftOrRight: number] // named tuple syntax
  buttonClick: [buttonName: string]
}>()

const calendarStore = useCalendarStore();
const { openedDays } = storeToRefs(calendarStore);
const { setCalendarIndex } = calendarStore;
const playdateStore = usePlaydateStore();
const { themeDark } = storeToRefs(playdateStore);

const route = useRoute();

watch<string, boolean>((): any => route.params.day,
  async (newDay, oldDay) => {
    const newDayNumber: number = Number.parseInt(newDay, 10);
    setCalendarIndex(newDayNumber);
  }
)


const catchPad = (upOrDown: number, leftOrRight: number) => {
  emit('dPadClick', upOrDown, leftOrRight);
}

const catchButton = (buttonName: string) => {
  emit('buttonClick', buttonName);
}
</script>

<template>
  <div id="CoverWrap"
        class="coverWrap"
        :class="themeDark ? 'pdCoverInverted' : 'pdCover'">

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

<style scoped>

  .coverWrap {
    padding: 0 10px;
    border-radius: 25px;
    width: 530px;
  }

  .coverSpace {
    background-color: black;
    border-radius: 25px;
    opacity: 0.35;
    height: 10px;
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
</style>
