<script setup lang="ts">
import pgBg from '@/assets/pdBackground.png'

import CalendarView from '@/components/calendarView.vue'
import ConsoleView from '@/components/consoleView.vue'
import GalleryView from '@/components/galleryView.vue'
import GameView from '@/components/gameView.vue'

import { Row, Col } from 'ant-design-vue'
import { useCalendarStore } from '@/stores/calendarStore'
import { usePlaydateStore } from '@/stores/pdStore'
import { useRoute } from 'vue-router'
import { watch, computed, ref } from 'vue'
import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { ScreenMap } from 'ant-design-vue/es/_util/responsiveObserve'
import useBreakpoint from 'ant-design-vue/es/_util/hooks/useBreakpoint'

const calendarStore = useCalendarStore()
const { openedDays } = storeToRefs(calendarStore)
const playdateStore = usePlaydateStore()
const { themeDark } = storeToRefs(playdateStore)
const breaks: Ref<ScreenMap> = useBreakpoint()

const route = useRoute()

// is needed for setting the index when directly open the app on a certain day
watch<string, boolean>(
  (): any => route.params.day,
  (newDay) => {
    const newDayNumber: number = Number.parseInt(newDay, 10)
    // calendarStore.setCalendarIndex(newDayNumber, false);

    if (calendarStore.calendarIndex !== newDayNumber) {
      calendarStore.setCalendarIndex(newDayNumber, false)
    }
  },
  { immediate: true }
)

const isReady = ref(false)

watch<string, boolean>(
  (): any => route.params.year,
  () => {
    isReady.value = calendarStore.isCalendarReady()
  },
  { immediate: true }
)

const catchPad = (upOrDown: number, leftOrRight: number) => {
  emit('dPadClick', upOrDown, leftOrRight)
}

const catchButton = (buttonName: string) => {
  emit('buttonClick', buttonName)
}

const emit = defineEmits<{
  dPadClick: [upOrDown: number, leftOrRight: number] // named tuple syntax
  buttonClick: [buttonName: string]
}>()

const isPlaydateRotated = computed(() => {
  return calendarStore.currentDayRotated && playdateStore.showGallery
})

const xsLayout = computed(() => breaks.value.xs && !breaks.value.sm)
</script>

<template>
  <div id="CoverWrap" class="coverWrap" :class="themeDark ? 'pdCover' : 'pdCoverInverted'">
    <Row :gutter="[8, 10]">
      <Col v-if="!themeDark" id="top" :span="24">
        <GameView />
      </Col>

      <Col v-if="!themeDark" :span="24" class="coverSpace"> </Col>

      <Col span="24" :flex="xsLayout ? '400px' : ''" id="middle" class="playdateInCover">
        <div v-if="!isReady" class="calendarNotReady" id="calendarNotReady">
          <div class="playdateYellowBright" style="padding: 12px 0">Coming</div>
          <div class="playdateYellowDark" style="padding: 12px 0">1st Dec</div>
          <div :class="themeDark ? 'pdTitleColor' : 'pdTitleColorInverted'" style="padding: 12px 0">
            {{ calendarStore.calendarYear }}
          </div>
        </div>

        <ConsoleView class="" @dPadClick="catchPad" @buttonClick="catchButton"> </ConsoleView>

        <CalendarView
          v-show="isReady && playdateStore.showCalendar"
          :selection="calendarStore.calendarIndex"
          :daysAmount="calendarStore.daysAmount"
          :openedDays="openedDays"
          :showWaitMessage="calendarStore.showWaitMessage"
        >
        </CalendarView>

        <GalleryView v-show="isReady && playdateStore.showGallery"> </GalleryView>

        <img
          class="pdBackground"
          :class="isPlaydateRotated ? 'rotatedBg' : ''"
          :src="pgBg"
          alt="background playdate screen"
        />
      </Col>

      <Col v-if="themeDark" :span="24" class="coverSpace"> </Col>

      <Col v-if="themeDark" id="bottom" :span="24">
        <GameView />
      </Col>
    </Row>
  </div>
</template>

<style>
.calendarGrid {
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 3px;
  width: 435px;
  height: 280px;
  padding: 36px 0 0 30px;
  z-index: 1;
}

.playdateFrame {
  /*
    height: 489px;
    width: 527px;
    */
  height: 541px;
  width: 560px;
  aspect-ratio: 560 / 541;
}

.gallery {
  position: absolute;
  top: 0;
  width: 400px;
  height: 240px;
  margin: 36px 0 0 34px;
  z-index: 1;
}

.playdateInCover {
  padding: 0 5px 10px !important;
}

.pdBackground {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  padding: 33px 0 0 35px;
  /* width: 435px; */
  height: 280px;
}

.coverWrap {
  padding: 0 10px;
  border-radius: 25px;
  width: 545px;
  margin: auto;
}

.calendarNotReady {
  line-height: 0.8em;
  text-align: center;
  font-size: 3rem;
  position: absolute;
  top: 55px;
  left: 160px;
  z-index: 1;
}

/*
  @media (max-width: 530px) {
    .coverWrap {
      width: 100%;
    }
  }


  @media (max-width: 400px) {
    .playdateFrame {
      width: 365px;
      height: 352px;
    }
  }
  */

@media (max-width: 560px) {
  .playdateFrame {
    width: 400px;
    height: 386px;
  }

  .console {
    width: 400px;
    height: 386px;
  }

  .playdateInCover {
    padding: 0 !important;
    width: 400px !important;
  }

  .coverWrap {
    width: 95%;
  }

  .gallery,
  .pdBackground {
    /*
      width: 75%;
      */
    width: 295px;
    height: 180px;
  }

  .calendarGrid {
    /*
      width: 270px;
      */
    width: 285px;
    height: 220px;
    row-gap: 0;
    margin: 24px 0 0 24px !important;
    padding: 0;
  }

  .gallery,
  .pdBackground {
    margin: 21px 0 0 21px !important;
    padding: 0;
  }

  .calendarNotReady {
    top: 15px;
    left: 85px;
  }
}
</style>

<style scoped>
/*
  @media (max-height: 920px) {
    .coverWrap {
      background-color: black;
    }
  }
  */

/*
  @media (max-width: 1024px) {
    .coverWrap {
    }
  }
  */

.coverSpace {
  background-color: black;
  border-radius: 25px;
  opacity: 0.35;
  height: 10px;
}

.rotatedBg {
  height: 410px !important;
  width: 245px !important;
  margin: 43px 0 0 262px !important;
  padding: 0;
}

@media (max-width: 560px) {
  .rotatedBg {
    height: 290px !important;
    width: 178px !important;
    padding: 16px 0 0 196px !important;
  }
}
</style>
