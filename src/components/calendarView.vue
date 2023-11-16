<script setup lang="ts">

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

      <div :class="`${selection === index ? 'cellSelected' : ''}`"
           style="width: 100%;"
      >
        Day {{ index }}
      </div>

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
  }
  .cellClosed {
    background-color: rgb(128, 128, 128);
  }
  .cellOpened {
    background-color: white;
  }

  .cellSelected {
    border: black solid 2px;
  }
</style>
