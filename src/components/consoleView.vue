<script setup lang="ts">
  import playdateConsole from '@/assets/playdate.png';
  import {BUTTON_A, BUTTON_B, DPAD_L, DPAD_R, DPAD_B, DPAD_T} from "@/interaction";
  import { Button } from 'ant-design-vue';
  import {computed} from "vue";
  import type {Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {storeToRefs} from "pinia";
  import {useCalendarStore} from "@/stores/calendarStore";

  const calendarStore = useCalendarStore();
  const playdateStore = usePlaydateStore();
  const { themeDark } = storeToRefs(playdateStore);

  const emit = defineEmits<{
    dPadClick: [upOrDown: number, leftOrRight: number] // named tuple syntax
    buttonClick: [buttonName: string]
  }>()

  function buttonClick(event: any) {
    const buttonName = event.target.id;
    emit('buttonClick', buttonName);
  }

  function dPadClick(event: any) {
    const id = event.target.id;
    let upOrDown = 0
    let leftOrRight = 0

    if (id === DPAD_R){
      leftOrRight = 1;
    } else if (id === DPAD_L){
      leftOrRight = -1
    } else if (id === DPAD_T){
      upOrDown = -1
    } else if (id === DPAD_B){
      upOrDown = 1
    }

    // upOrDown: number, leftOrRight: number
    emit('dPadClick', upOrDown, leftOrRight);
  }

  const breaks: Ref<ScreenMap> = useBreakpoint();
  const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)

  const isPlaydateRotated = computed(() => {
    return calendarStore.currentDayRotated && playdateStore.showGallery
  })
  
</script>

<template>
  <div id="consoleView"
       class="console"
        :class="isPlaydateRotated ? 'rotatedConsole' : ''">

    <img class="playdateFrame"
         :src="playdateConsole"
         alt="playdate frame"/>

    <div class="dPadOverlay">
      <Button :id="DPAD_T"
              class="dPadButton"
              :class="themeDark ? 'pdCover' : 'pdCoverInverted'"
              :style="`${ xsAndSmLayout ? 'top: -102px; left: -29px;' : 'top: 0; left: 3px;'}`"
              @keyup.up="dPadClick"
              @click="dPadClick" >
        <i :id="DPAD_T"
           class="material-icons">keyboard_arrow_up</i>
      </Button>

      <Button :id="DPAD_L"
               class="dPadButton"
               :class="themeDark ? 'pdCover' : 'pdCoverInverted'"
               :style="`${ xsAndSmLayout ? 'top: -64px; left: -118px;' : 'top: 50px; left: -95px;'}`"
               @keyup.left="dPadClick"
               @click="dPadClick" >
        <i :id="DPAD_L"
           class="material-icons">keyboard_arrow_left</i>
      </Button>

      <Button :id="DPAD_R"
               class="dPadButton"
               :class="themeDark ? 'pdCover' : 'pdCoverInverted'"
               :style="`${ xsAndSmLayout ? 'top: -64px; left: -92px;' : 'top: 50px; left: -46px;'}`"
               @keyup.right="dPadClick"
               @click="dPadClick" >
        <i :id="DPAD_R"
           class="material-icons">keyboard_arrow_right</i>
      </Button>

      <Button :id="DPAD_B"
               class="dPadButton"
               :class="themeDark ? 'pdCover' : 'pdCoverInverted'"
               :style="`${ xsAndSmLayout ? 'top: -26px; left: -180px;' : 'top: 100px; left: -148px;'}`"
               @keyup.down="dPadClick"
               @click="dPadClick" >
        <i :id="DPAD_B"
           class="material-icons">keyboard_arrow_down</i>
      </Button>

    </div>

    <div class="buttonOverlay">
      <Button :id="BUTTON_B"
               class="pdButton"
               :class="themeDark ? 'pdCover' : 'pdCoverInverted'"
               @click="buttonClick">
      </Button>

      <Button :id="BUTTON_A"
               class="pdButton btnA"
               :class="themeDark ? 'pdCover' : 'pdCoverInverted'"
               @click="buttonClick">
      </Button>
    </div>


  </div>
</template>

<style scoped>

  .console {
    position: relative;
    height: 100%;
    z-index: 10;
    transition: 0.2s all;
  }

  .buttonOverlay,
  .dPadOverlay {
    position: absolute;
    display: flex;
  }

  .dPadOverlay {
    top: 333px;
    left: 78px;
  }

  @media (min-width: 560px) and (max-width: 768px) {
    .dPadOverlay {
      top: 446px;
      left: 110px;
    }
  }

  .buttonOverlay {
    top: 347px;
    left: 275px;
  }

  .btnA {
    position: relative;
    left: 33px;
  }

  @media (max-width: 560px) {
    .buttonOverlay {
      top: 247px;
      left: 196px;
    }

    .btnA {
      left: 24px !important;
    }
  }


  .pdButton,
  .dPadButton {
    border: solid 1px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }

  .dPadButton {
    width: 50px;
    height: 50px;
  }

  .pdButton {
    width: 70px;
    height: 70px;
  }


  @media (max-width: 560px) {

    .pdButton {
      width: 50px;
      height: 50px;
    }

    /*
    .dPadButton {
      width: 40px;
      height: 40px;
    }
    */

    .dPadButton,
    .pdButton {
      background-color: rgb(128, 128, 128, 0.1);
    }

  }

    /*
    .dPadButton > .material-icons {
      position: relative;
      top: 12px;
      left: 12px;
    }
    */

  .dPadButton > .material-icons {
    position: relative;
    top: 1px;
    left: -2px;
  }

  .rotatedConsole {
    transform: rotate(90deg);
  }
</style>
