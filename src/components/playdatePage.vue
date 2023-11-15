<script setup lang="ts">
import Calendar from "@/components/calendarView.vue";
import Console from "@/components/consoleView.vue";
import {BUTTON_A} from "@/interaction";
import {ref} from "vue";

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
  <div style="position:relative;">
    <console class=""
             @dPadClick="catchPad"
             @buttonClick="catchButton">
  
      <calendar :selection="selectionIndex"
                :daysAmount="daysAmount"
                :openedDays="openedDays"
      >
      </calendar>
    </console>
  </div>
</template>

<style scoped>

</style>
