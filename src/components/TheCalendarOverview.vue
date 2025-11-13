<template>
  <div class="calendarOverview">
    <Row style="align-items: center; justify-content: space-evenly;"
         :gutter="[16,8]">

      <Col v-for="(title, index) in calenderTimeline"
        :key="`${index}_${title}`"
      >
<!--
        :span="title === 'delimiter' ? 2 : 5"
-->
<!--
        <hr v-if="title === 'delimiter'"
        >
-->
        <div v-if="title === 'delimiter'"
              style="width: 100%;">
          <hr style="width: 100%;">
        </div>

        <div v-else
             style="text-align:center; ">
<!--
          <pd-title :calendar-year="title"
                    :theme-dark="false"
                    :show-title="true"
                    :clickable="true"
                    @clicked="calendarClick"
          />
-->

          <CalendarCard :calendar-year="title"
                        :active="true"
                        @clickedCalendar="calendarClick(title)"
                        @clickedCredits="creditClick(title)"
          />

        </div>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
  import {Popconfirm, Row, Col} from "ant-design-vue";
  import {computed, inject, type Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
  // import {usePlaydateStore} from "@/stores/pdStore";
  // import {useGalleryStore} from "@/stores/galleryStore";
  // import {storeToRefs} from "pinia";
  import {useRouter} from "vue-router";

  // const playdateStore = usePlaydateStore();
  // const galleryStore = useGalleryStore();
  // const { themeDark } = storeToRefs(playdateStore);
  const version = import.meta.env.VITE_VERSION
  const router = useRouter();

  // const breaks: Ref<ScreenMap> = useBreakpoint();
  // const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)
  // const mdLayout = computed(() => (breaks.value.md || breaks.value.lg) && !breaks.value.xl)
  // const lgLayout = computed(() => breaks.value.xl)
  
  const calendarYears = inject<string[]>('calendarYears') || [];


  const calenderTimeline = computed(() => {
    const timeline = [];

    const entries = calendarYears.length * 2 - 1;
    let calIndex = -1;

    for (let i = 0; i < entries; i++) {
      const addCalTitle = i % 2 == 0;

      if (addCalTitle) {
        calIndex = calIndex + 1;
        timeline[i] = calendarYears[calIndex];
      } else {
        timeline[i] = 'delimiter';
      }
    }

    return timeline;
  })

  const calendarClick = (year: any) => {
    router.push(`/calender/${year}`);
    // router.push('/calender', event);
  }

  const creditClick = (event: any) => {
    console.log(event)
  }

</script>


<style scoped>

  .calendarOverview {
    padding: 24px;
  }
</style>
