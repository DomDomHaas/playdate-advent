<script setup lang="ts">
  import {getGiftIndecies, getGifts} from "@/stores/imageFactory";
  import {getIcons} from '@/stores/iconFactory';
  import {storeToRefs} from "pinia";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {computed} from "vue";
  import type {Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

  const {
    selection,
    daysAmount,
    openedDays,
    showWaitMessage,
  } = defineProps<{
    selection: number
    daysAmount: number,
    openedDays: number[],
    showWaitMessage: boolean,
  }>()

  const pdStore = usePlaydateStore();
  const { themeDark } = storeToRefs(pdStore);

  const giftImages = getGifts();
  const icons = getIcons();
  const giftIndecies = getGiftIndecies(daysAmount, giftImages.length - 1);

  const breaks: Ref<ScreenMap> = useBreakpoint();
  const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)

  function cellImage(index: number) {
    let diffIndex = index - 1;

    if (openedDays.includes(index)) {
      return icons[diffIndex];
    }

    return giftImages[giftIndecies[diffIndex]]
  }

  function getBadeStyle(index: number) {
    if (xsAndSmLayout) {
      return index % 2 === 0 ? 'top: 0;': 'top: 20px;'
    }
    return index % 2 === 0 ? 'top: -3px;': 'top: 30px;'
  }
</script>

<template>
  <div id="calendarView"
       class="calenderGrid">

    <div v-for="index in daysAmount"
         :key="`day_${index}`"
         :id="`day_${index}`"
         class="calenderCell"
         :class="{
          'cellOpened': openedDays.includes(index),
          'cellClosed': !openedDays.includes(index),
          'cellSelected': selection === index,
          'cellInverted': !themeDark,
          }"
         >

      <div :style="getBadeStyle(index)"
           class="dayBadge">
        <span style="position: relative; top: 2px;">{{ index }}</span>
      </div>

      <div class="cellImg">
        <img style="max-width: 100%; max-height: 100%;"
             :src="cellImage(index)"
             alt="gift image"/>
      </div>

    </div>

    <div class="waitMsg"
        :class="showWaitMessage ? 'waitOut' : ''">
      <div>Wait for it, it's not time yet!</div>
    </div>
  </div>
</template>

<style scoped>

  .calenderCell {
    display: flex;
    position: relative;
    transform: scale(0.9);
    transition: all 0.3s;
    margin: 0 5px;
    padding: 5px;
    /*
    border: transparent solid 2px;
    */
  }

  .cellSelected {
    /*
    border: black solid 2px;
    */
    border-radius: 10px;
  }

  .cellClosed {
/*    background-color: rgb(128, 128, 128);*/
  }

  .cellOpened > .cellImg {
    transform: scale(0.95);
    padding: 8px 5px 0 6px;
/*    background-color: white;*/
  }

  .dayBadge {
    position: absolute; right: -5px;
    border-radius: 50%;
    background-color: floralwhite;
    height: 25px;
    min-width: 25px;
    font-size: 1rem;
    text-align: center;
    z-index: 1;
  }

  .cellSelected > .cellImg,
  .cellSelected > .dayBadge {
    filter: invert(100%);
    transform: scale(1.1) !important;
    transition: 0.3s all;
  }

  @media (max-width: 560px) {
    .calenderCell {
      margin: 0;
      padding: 0;
    }

    .calenderCell > .cellImg {
      transform: scale(0.65);
    }

    .cellSelected > .cellImg,
    .cellSelected > .dayBadge {
      transform: scale(0.85) !important;
    }
  }


  .cellSelected.cellInverted > .cellImg,
  .cellSelected.cellInverted > .dayBadge {
    filter: invert(0%) !important;
  }

  .cellInverted > .cellImg,
  .cellInverted > .dayBadge {
    filter: invert(100%) !important;
  }

  .cellSelected > .dayBadge,
  .cellOpened > .dayBadge {
    z-index: 1;
  }

  .waitMsg {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 0 10px 0 10px;
    margin: 30px 0 0 30px;
    transition: 0.5s all;
    background-color: #ddd;
    height: 0;
  }

  .waitMsg > div {
    transition: 0.5s all;
    overflow: hidden;
    height: 0;
    font-size: 1.5rem;
  }

  .waitOut {
    top: 0;
    height: 70px;
  }

  .waitMsg.waitOut > div {
    padding: 20px;
    height: 100%;
  }

  @media (max-width: 560px) {
    .waitMsg {
      margin: 20px 0 0 20px;
    }

    .waitMsg > div {
      font-size: 1.3rem;
    }

    .waitMsg.waitOut > div {
      padding: 10px;
    }
  }

</style>
