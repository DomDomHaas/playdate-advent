<script setup lang="ts">
import CalendarView from "@/components/calendarView.vue";
import ConsoleView from "@/components/consoleView.vue";
import {BUTTON_A} from "@/interaction";
import {ref} from "vue";

const {
  selection,
  openedDays,
} = defineProps<{
  selection: number
  daysAmount: number,
  openedDays: any[],
}>()

const emit = defineEmits<{
  dPadClick: [upOrDown: number, leftOrRight: number] // named tuple syntax
  buttonClick: [buttonName: string]
}>()

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

    <CalendarView :selection="selection"
                  :daysAmount="daysAmount"
                  :openedDays="openedDays"
                  >
    </CalendarView>

  </div>
</template>

<style scoped>

</style>
