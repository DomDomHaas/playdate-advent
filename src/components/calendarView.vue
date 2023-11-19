<script setup lang="ts">
import {getGiftIndecies, getGifts} from "@/stores/imageFactory";

  const {
    selection,
    daysAmount,
    openedDays,
  } = defineProps<{
    selection: number
    daysAmount: number,
    openedDays: any[],
  }>()

  const giftImages = getGifts();
  const giftIndecies = getGiftIndecies(daysAmount, giftImages.length - 1);

/*  function getCellClass (index: number) {
    let classes: string = openedDays.includes(index);
    if (selection === index) {
      classes += ' cellSelected';
    }
/!*    console.log(`class for ${index} ${selection}`)*!/

    return classes;
  }*/

</script>

<template>
  <div id="calendarView"
       class="calenderGrid">

    <div v-for="index in daysAmount"
         :key="`day_${index}`"
         :id="`day_${index}`"
         class="calenderCell"
         :class="openedDays.includes(index) ? 'cellOpened' : 'cellClosed' && selection === index ? 'cellSelected' : ''"
         >

      <div :style="index % 2 === 0 ? 'top: 5px;': 'top: 35px;'"
           class="dayBadge">
        {{ index }}
      </div>

      <img style="max-width: 100%; max-height: 100%;"
           :src="giftImages[giftIndecies[index]]"
           alt="gift image"/>

    </div>
  </div>
</template>

<style scoped>
  .calenderGrid {
    position: absolute;
    top: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
    width: 400px;
    height: 238px;
    padding: 36px 0 0 36px;
    z-index: 1;
  }

  .calenderCell {
    display: flex;
    position: relative;
    transform: scale(0.9);
    transition: all 0.3s;
  }

  .cellClosed {
/*    background-color: rgb(128, 128, 128);*/
  }

  .cellOpened {
/*    background-color: white;*/
  }

  .dayBadge {
    position: absolute; top: 5px; right: 0;
    border-radius: 50%;
    background-color: floralwhite;
    height: 22px;
    min-width: 22px;
    font-size: 1.1rem;
    text-align: center;
  }

  .cellSelected {
    filter: invert(100%);
    transform: scale(1.1);
  }

  .cellSelected > img {
    border: black solid 2px;
    border-radius: 10px;
  }
</style>
