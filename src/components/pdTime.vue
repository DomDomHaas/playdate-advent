<script setup lang="ts">

import {computed, type Ref } from "vue";
import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
import {usePlaydateStore} from "@/stores/pdStore";

const { themeDark } = defineProps<{ themeDark: boolean }>()

const breaks: Ref<ScreenMap> = useBreakpoint();
const playdateStore = usePlaydateStore();

const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)

const style20 = computed(() => {
  let style = 'position: absolute;';
  style += xsAndSmLayout.value ? 'left: 170px; top: 0px;' : 'left: 275px; top: -127px;';
  return style;
})

const style2x = computed(() => {
  let style = 'position: absolute;';
  style += xsAndSmLayout.value ? 'left: 170px; top: 70px;' : 'left: 275px; top: -127px;';
  return style;
})

</script>

<template>
  <div style="line-height: 0.8em; text-align: end; font-size: 3rem;"
       :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'">
    <div>
      {{ playdateStore.currentTime }}
    </div>

    <div style="position: relative; top: 10px;">
      {{ playdateStore.currentDayMonth }}
    </div>
  </div>
</template>

<style scoped>

</style>
