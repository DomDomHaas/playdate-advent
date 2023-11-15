<script setup lang="ts">

/*
  const {
    selection,
    openedDays,
  } = defineProps({
    selection: {
      type: Number,
      required: true,
    },
    openedDays: {
      type: [] as any,
      required: true,
      default: () => [],
    },
  });
*/

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
  <div class="calenderGrid">

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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
    width: 434px;
    height: 258px;
    padding: 24px 0 0 38px;
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
