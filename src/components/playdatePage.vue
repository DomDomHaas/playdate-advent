<script setup lang="ts">
import CalendarView from "@/components/calendarView.vue";
import ConsoleView from "@/components/consoleView.vue";
import GalleryView from "@/components/galleryView.vue";

import {usePlaydateStore, useCalendarStore} from "@/stores/store";
import pgBg from "@/assets/pdBackground.png";

const emit = defineEmits<{
  dPadClick: [upOrDown: number, leftOrRight: number] // named tuple syntax
  buttonClick: [buttonName: string]
}>()

const calendarStore = useCalendarStore();
const playdateStore = usePlaydateStore();

const catchPad = (upOrDown: number, leftOrRight: number) => {
  emit('dPadClick', upOrDown, leftOrRight);
}

const catchButton = (buttonName: string) => {
  emit('buttonClick', buttonName);
}
</script>

<template>
  <div id="playdatePage"
       style="position:relative;">

    <ConsoleView class=""
                 @dPadClick="catchPad"
                 @buttonClick="catchButton">
  
    </ConsoleView>

    <CalendarView v-show="playdateStore.showCalendar"
                  :selection="calendarStore.calendarIndex"
                  :daysAmount="calendarStore.daysAmount"
                  :openedDays="calendarStore.openedDays"
                  >
    </CalendarView>

    <GalleryView v-show="playdateStore.showGallery"
                 :name="calendarStore.selectedGame.name"  >

    </GalleryView>

    <img class="pdBackground"
         :src="pgBg"
         alt="background playdate screen" />
  </div>
</template>

<style scoped>

  .pdBackground {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    padding: 35px 0 0 32px;

    height: 241px;
    width: 404px;
  }
</style>
