<script setup lang="ts">
import giftW from '@/assets/adventGiftW.png'
import giftG from '@/assets/adventGiftG.png'

  const {
    selection,
    openedDays,
  } = defineProps<{
    selection: number
    daysAmount: number,
    openedDays: any[],
  }>()

</script>

<template>
  <div id="calendarView"
       class="calenderGrid">

    <div v-for="index in daysAmount"
         :key="`day_${index}`"
         :id="`day_${index}`"
         class="calenderCell"
         :class="openedDays.includes(index) ? 'cellOpened' : 'cellClosed'"
         >

      <div style="position: absolute; top: 5px; left: 5px; ">
        Day {{ index }}
      </div>

      <img :class="`${selection === index ? 'cellSelected' : ''}`"
           style="max-width: 100%; max-height: 100%;"
           :src="selection === index ? giftW : giftG"
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
    padding: 22px 0 0 36px;
    z-index: 1;
  }

  .calenderCell {
    display: flex;
    position: relative;
  }

  .cellClosed {
    background-color: rgb(128, 128, 128);
  }

  .cellOpened {
    background-color: white;
  }

  .cellSelected {
    /*
    border: black solid 2px;
    */
  }
</style>
