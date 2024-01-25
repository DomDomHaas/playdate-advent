<template>

  <TheCalendarPageLayout>
    <template #title>
      <PdTitle calendar-year="2023"
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
  import {computed, type Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {useGalleryStore} from "@/stores/galleryStore";
  import {storeToRefs} from "pinia";
  import TheCalendarPageLayout from "@/components/TheCalendarPageLayout.vue";

  const calendarStore = useCalendarStore();
  const playdateStore = usePlaydateStore();
  const galleryStore = useGalleryStore();
  const { themeDark } = storeToRefs(playdateStore);
  const version = import.meta.env.VITE_VERSION

  const breaks: Ref<ScreenMap> = useBreakpoint();
  const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)
  const mdLayout = computed(() => (breaks.value.md || breaks.value.lg) && !breaks.value.xl)
  const lgLayout = computed(() => breaks.value.xl)

  const catchPad = (upOrDown: number, leftOrRight: number) => {
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
    if (buttonName === BUTTON_A) {
      if (calendarStore.isCurrentDayUnlockable) {
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
