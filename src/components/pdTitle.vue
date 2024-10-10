<script setup lang="ts">

import {computed, type Prop} from "vue";
import type {Ref} from "vue";

import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

const breaks: Ref<ScreenMap> = useBreakpoint();

const {
  themeDark,
  calendarYear,
  showTitle,
  clickable,
} = defineProps<{
  themeDark: boolean,
  calendarYear: string,
  showTitle: boolean,
  clickable: boolean,
}>()

defineEmits(['clicked'])

const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)

const style20 = computed(() => {
  let style = 'position: absolute;';
//  style += xsAndSmLayout.value ? 'left: 170px; top: 0px;' : 'left: 275px; top: -127px;';
  style += xsAndSmLayout ? 'left: 170px; top: 0px;' : 'left: 275px; top: -127px;';
  return style;
})

const style2x = computed(() => {
  let style = 'position: absolute;';
//  style += xsAndSmLayout.value ? 'left: 170px; top: 70px;' : 'left: 275px; top: -127px;';
  style += xsAndSmLayout ? 'left: 170px; top: 70px;' : 'left: 275px; top: -127px;';
  return style;
})

const yearFirstDigits = computed(() => calendarYear.substring(0, 2));
const yearSecondaryDigits = computed(() => calendarYear.substring(2, 4));

</script>

<template>
  <div class="pdTitle"
       :style="`position: relative; ${clickable ? 'cursor: pointer;' : ''}`"
        @click="() => clickable ? $emit('clicked', calendarYear) : ''">

    <div v-if="showTitle"
         style="position: absolute; top: 0; color: #FFC900;">play</div>

    <div v-if="showTitle"
         style="position: absolute; left: 3px; top: 70px; color: #FFB200;">date</div>

    <div v-if="showTitle"
         style="position: absolute; left: 15px; top: 125px; "
         :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">advent</div>

    <div :style="style20"
         :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">
      {{ yearFirstDigits }}
    </div>

    <div :style="style2x"
         :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">
      {{ yearSecondaryDigits }}
    </div>
  </div>

</template>

<style scoped>
  .pdTitle {
    font-size: 5rem;
    line-height: 0.7em;
    /*
    padding: 10px 20px !important;
    */
    height: 200px;
  }

</style>
