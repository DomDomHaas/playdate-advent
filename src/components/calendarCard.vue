<template>
  <div class="calCard">

    <PdTitle :calendar-year="calendarYear"
             :theme-dark="true"
             :show-title="true"
             :clickable="true"
             @click="$emit('clickedCalendar', calendarYear)"
    />

    <Button type="primary"
            @click="$emit('clickedCalendar', calendarYear)">
      Calendar {{ calendarYear }}
      <template #icon>
        <img :src="calendarIcon"
             alt="calendarIcon"
             style="padding-right: 5px;" />
      </template>
    </Button>

    <Button style="margin-left: 5px;"
            @click="$emit('clickedCredits', calendarYear)">
      Credits {{ calendarYear }}
    </Button>

  </div>

</template>

<script setup lang="ts">
  import type {Ref} from "vue";
  import {Button} from 'ant-design-vue';

  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
  import PdTitle from "@/components/pdTitle.vue";

  import calendarIcon from '@/assets/icons/ui/calendar.svg';

  const {
    // themeDark,
    calendarYear,
    active,
  } = defineProps<{
    // themeDark: boolean,
    calendarYear: string,
    active: boolean,
  }>()

  defineEmits(['clickedCalendar', 'clickedCredits'])

  const breaks: Ref<ScreenMap> = useBreakpoint();

</script>

<style scoped>

  .calCard {
    text-align:center;
    border-radius: 25px;
    border: solid gray 1px;
    padding: 10px 10px 10px 15px;
  }

</style>
