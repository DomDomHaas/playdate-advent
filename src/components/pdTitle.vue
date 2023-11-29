<script setup lang="ts">

import {computed } from "vue";
import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

const breaks: Ref<ScreenMap> = useBreakpoint();

const { themeDark } = defineProps<{ themeDark: boolean }>()

const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)

const style20 = computed(() => {
  let style = 'position: absolute;';
  style += xsAndSmLayout ? 'left: 170px; top: 0px;' : 'left: 275px; top: -127px;';
  return style;
})

const style2x = computed(() => {
  let style = 'position: absolute;';
  style += xsAndSmLayout ? 'left: 170px; top: 70px;' : 'left: 275px; top: -127px;';
  return style;
})

</script>

<template>
  <div style="position: relative;">
    <div style="position: absolute; top: 0; color: #FFC900;">play</div>

    <div style="position: absolute; left: 3px; top: 70px; color: #FFB200;">date</div>

    <div style="position: absolute; left: 15px; top: 125px; "
         :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">advent</div>

    <div :style="style20"
         :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">20</div>

    <div :style="style2x"
         :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">23</div>
  </div>
</template>

<style scoped>

</style>
