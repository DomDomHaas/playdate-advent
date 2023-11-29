<script setup lang="ts">

import {computed } from "vue";
import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
import {Col} from "ant-design-vue";
import {usePlaydateStore} from "@/stores/pdStore";

const breaks: Ref<ScreenMap> = useBreakpoint();

const { themeDark } = defineProps<{ themeDark: boolean }>()
const playdateStore = usePlaydateStore();

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
  <div style="line-height: 0.8em; text-align: end;"
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
