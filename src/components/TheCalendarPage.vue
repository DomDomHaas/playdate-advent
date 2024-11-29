<template>

  <TheCalendarPageLayout>
    <template #title>
      <PdTitle :calendarYear="calendarYear"
               :show-title="true"
               :clickable="false"
               :themeDark="themeDark" />
    </template>

    <template #timing>
      <pd-time :themeDark="themeDark"/>
    </template>

    <template #lightSwitch>
      <div v-if="xsAndSmLayout" >
        <LightSwitch />
      </div>
      <div v-else >
        <Popconfirm :open="playdateStore.isVersionOutdated"
                    title="New Calendar version available, please reload!"
                    ok-text="Reload"
                    placement="bottom"
                    @confirm="reloadApp"
        >
          <LightSwitch />
        </Popconfirm>
      </div>
    </template>

    <template #welcomeInfo>
      <welcome-view />
    </template>

    <template #playdate>
      <div v-if="xsAndSmLayout"
      >
        <Popconfirm :open="playdateStore.isVersionOutdated"
                    title="New Calendar version available, please reload!"
                    ok-text="Reload"
                    placement="top"
                    @confirm="reloadApp"
        >
        </Popconfirm>

        <PlaydatePageGrid @dPadClick="catchPad"
                          @buttonClick="catchButton" />
      </div>

      <div v-else >
        <PlaydatePageGrid @dPadClick="catchPad"
                          @buttonClick="catchButton" />

      </div>
    </template>

    <template #community>
      <community-view />
    </template>

    <template #version>
      version: {{ version }}
    </template>

    <template #credits>
      <credits-view />
    </template>

    <template #timeDetailed>
      <Time />
    </template>
    
  </TheCalendarPageLayout>
</template>

<script setup lang="ts">
  import PdTitle from "@/components/pdTitle.vue";
  import PdTime from "@/components/pdTime.vue";
  import WelcomeView from "@/components/welcomeView.vue";
  import {Popconfirm, Row} from "ant-design-vue";
  import PlaydatePageGrid from "@/components/playdatePageGrid.vue";
  import {BUTTON_A, BUTTON_B} from "@/interaction";
  import CommunityView from "@/components/communityView.vue";
  import CreditsView from "@/components/creditsView.vue";
  import LightSwitch from "@/components/lightSwitch.vue";
  import {useCalendarStore} from "@/stores/calendarStore";
  import {computed, ref, watch } from "vue";
  import type { Ref } from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {useGalleryStore} from "@/stores/galleryStore";
  import {storeToRefs} from "pinia";
  import TheCalendarPageLayout from "@/components/TheCalendarPageLayout.vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const router = useRouter();
  const calendarYear = ref('');
  calendarYear.value = route.params.year as string;
  const calendarDay = ref('');
  calendarDay.value = route.params.day as string;

  const playdateStore = usePlaydateStore();
  playdateStore.initStore(calendarYear.value);
  const { themeDark, currentYear } = storeToRefs(playdateStore);
  let updateRoute = false;
  
  if (!calendarYear.value) {
    calendarYear.value = playdateStore.currentYear;
    updateRoute = true;
  }

  if (!calendarDay.value) {
    calendarDay.value = playdateStore.currentDayOnly;
    updateRoute = true;
  }

  if (updateRoute) {
    router.push({ params: { year: calendarYear.value, day: calendarDay.value }});
  }

  const calendarStore = useCalendarStore();
  calendarStore.initStore(calendarYear.value, currentYear.value);
  const { setCalendarIndex } = calendarStore;

  const galleryStore = useGalleryStore();
  galleryStore.initGallery(calendarYear.value, calendarStore);
  
  const version = import.meta.env.VITE_VERSION;

  const breaks: Ref<ScreenMap> = useBreakpoint();
  const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)
  // const mdLayout = computed(() => (breaks.value.md || breaks.value.lg) && !breaks.value.xl)
  // const lgLayout = computed(() => breaks.value.xl)

  const isReady = ref(calendarStore.isCalendarReady());


  watch<string, boolean>((): any => route.params.year,
    (newYear) => {
      calendarYear.value = newYear;
      calendarStore.initStore(calendarYear.value, currentYear.value);
      galleryStore.initGallery(calendarYear.value, calendarStore);      

      isReady.value = calendarStore.isCalendarReady();
    }
  )

  watch<string, boolean>((): any => route.params.day,
    (newDay) => {
      calendarDay.value = newDay;
      const newDayNumber: number = Number.parseInt(calendarDay.value, 10);

      if (calendarStore.calendarIndex !== newDayNumber) {
        setCalendarIndex(newDayNumber, false);
      }
    }
  )

  const catchPad = (upOrDown: number, leftOrRight: number) => {
    if (!isReady.value) {
      return;
    }

    if (playdateStore.showCalendar) {
      calendarStore.updateCalendarIndex(upOrDown, leftOrRight);
      /*
          console.log('calendarIndex')
          console.log(calendarStore.calendarIndex)
      */
    }

    if (playdateStore.showGallery) {
      galleryStore.updateGalleryIndex(upOrDown, leftOrRight);
      /*
          console.log('screenshotIndex')
          console.log(galleryStore.screenshotIndex)
      */
    }

  }

  const catchButton = (buttonName: string) => {
    if (!isReady.value) {
      return;
    }

    if (buttonName === BUTTON_A) {
      if (calendarStore.isCurrentDayUnlockable()) {
        calendarStore.openDay(calendarStore.calendarIndex);
        playdateStore.changeToGallery();
      } else {
        calendarStore.triggerWaitMessage();
      }
    }

    if (buttonName === BUTTON_B) {
      playdateStore.changeToCalendar();
    }
  }

  function reloadApp() {
    window.location.reload();
  }

</script>


<style scoped>

</style>
