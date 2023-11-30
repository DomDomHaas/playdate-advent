<script setup lang="ts">
  import playdateConsole from '@/assets/playdate.png';
  import {BUTTON_A, BUTTON_B, DPAD_L, DPAD_R, DPAD_B, DPAD_T} from "@/interaction";
  import { Button } from 'ant-design-vue';
  import {computed} from "vue";
  import type {Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

//  const emit = defineEmits(['dPadClick', 'buttonClick']);

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

</script>

<template>
  <div id="consoleView"
       class="console" >

    <img class="playdateFrame"
         :src="playdateConsole"
         alt="playdate frame"/>

    <div class="dPadOverlay">
      <Button :id="DPAD_T"
              class="dPadButton"
              :style="`${ xsAndSmLayout ? 'top: -95px; left: -30px;' : 'top: 4px; left: 3px;'}`"
              @keyup.up="dPadClick"
              @click="dPadClick" >
        <i :id="DPAD_T"
           class="material-icons">keyboard_arrow_up</i>
      </Button>

      <Button :id="DPAD_L"
               class="dPadButton"
               :style="`${ xsAndSmLayout ? 'top: -55px; left: -120px;' : 'top: 50px; left: -95px;'}`"
               @keyup.left="dPadClick"
               @click="dPadClick" >
        <i :id="DPAD_L"
           class="material-icons">keyboard_arrow_left</i>
      </Button>

      <Button :id="DPAD_R"
               class="dPadButton"
               :style="`${ xsAndSmLayout ? 'top: -55px; left: -90px;' : 'top: 50px; left: -50px;'}`"
               @keyup.right="dPadClick"
               @click="dPadClick" >
        <i :id="DPAD_R"
           class="material-icons">keyboard_arrow_right</i>
      </Button>

      <Button :id="DPAD_B"
               class="dPadButton"
               :style="`${ xsAndSmLayout ? 'top: -15px; left: -180px;' : 'top: 100px; left: -150px;'}`"
               @keyup.down="dPadClick"
               @click="dPadClick" >
        <i :id="DPAD_B"
           class="material-icons">keyboard_arrow_down</i>
      </Button>

    </div>

    <div class="buttonOverlay">
      <Button :id="BUTTON_B"
               class="pdButton"
               @click="buttonClick">
      </Button>

      <Button :id="BUTTON_A"
               class="pdButton btnA"
               style="position: relative; left: 45px"
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
  }

  .buttonOverlay,
  .dPadOverlay {
    position: absolute;
    display: flex;
  }

  .dPadOverlay {
    /*
    top: 312px;
    left: 63px;
    */
    top: 333px;
    left: 78px;
  }

  .buttonOverlay {
/*    top: 325px;
    left: 272px;*/
    top: 350px;
    left: 279px;
  }

  @media (max-width: 560px) {
    .buttonOverlay {
      top: 255px;
      left: 198px;
    }

    .btnA {
      left: 15px !important;
    }
  }

  /*
  @media (max-width: 1024px) {
    .pageGrid {
      grid-template-columns: 1fr;
      grid-template-rows: 2fr auto;
      grid-template-areas:
        "middle"
        "left"
        "right";
    }
  }
  */

  /*
  @media (max-width: 1024px) {
    .dPadOverlay {
      top: 300px;
      left: 60px;
    }

    .buttonOverlay {
      top: 314px;
      left: 263px;
    }

    .btnA {
      left: 46px;
    }
  }
  */

  .pdButton,
  .dPadButton {
    border: solid 1px transparent;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background-color: transparent;
  }

  .dPadButton {
    width: 50px;
    height: 50px;
    /*
    background-color: transparent;
    */
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
    top: 0;
    left: -2px;
  }

  .pdButton {
    width: 60px;
    height: 60px;
  }

</style>
