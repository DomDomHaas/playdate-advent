<script setup lang="ts">
  // import playdateConsole from '@/assets/playdateCut.png';
  import playdateConsole from '@/assets/playdate.png';
  import {BUTTON_A, BUTTON_B, DPAD_L, DPAD_R, DPAD_B, DPAD_T} from "@/interaction";

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

</script>

<template>
  <div id="consoleView"
       class="console" >

    <img class="playdateFrame"
         :src="playdateConsole"
         alt="playdate frame"/>

<!--
    <slot style="height: 100%"></slot>
-->

    <div class="dPadOverlay">
      <div :id="DPAD_T"
           class="dPadButton"
           @click.prevent="dPadClick">
        <i :id="DPAD_T"
           @click.stop="dPadClick"
           class="material-icons">keyboard_arrow_up</i>
      </div>
      <div :id="DPAD_L"
           class="dPadButton"
           style="top: 48px; left: -98px;"
           @click.prevent="dPadClick">
        <i :id="DPAD_L"
           @click.stop="dPadClick"
           class="material-icons">keyboard_arrow_left</i>
      </div>
      <div :id="DPAD_R"
           class="dPadButton"
           style="top: 48px; left: -55px;"
           @click.prevent="dPadClick">
        <i :id="DPAD_R"
           @click.stop="dPadClick"
           class="material-icons">keyboard_arrow_right</i>
      </div>
      <div :id="DPAD_B"
           class="dPadButton"
           style="top: 95px; left: -155px;"
           @click.prevent="dPadClick">
        <i :id="DPAD_B"
           @click.stop="dPadClick"
           class="material-icons">keyboard_arrow_down</i>
      </div>
    </div>

    <div class="buttonOverlay">
      <div :id="BUTTON_B"
           class="pdButton"
           @click="buttonClick">
      </div>

      <div :id="BUTTON_A"
           class="pdButton btnA"
           style="position: relative; left: 53px"
           @click="buttonClick">
      </div>
    </div>

  </div>
</template>

<style scoped>

  .console {
    position: absolute;
    height: 100%;
    z-index: 2;
  }

  .buttonOverlay,
  .dPadOverlay {
    height: 100%;
    position: absolute;
    display: flex;
  }

  .dPadOverlay {
    /*
    top: 312px;
    left: 63px;
    */
    top: 333px;
    left: 81px;
  }

  .buttonOverlay {
/*    top: 325px;
    left: 272px;*/
    top: 350px;
    left: 279px;
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

  @media (max-width: 1024px) {
/*
    .dPadOverlay {
      top: 300px;
      left: 60px;
    }

    .buttonOverlay {
      top: 314px;
      left: 263px;
    }
    */

    .btnA {
      left: 46px !important;
    }
  }

  .pdButton,
  .dPadButton {
    border: solid 1px transparent;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }

  .dPadButton {
    width: 50px;
    height: 50px;
  }

  .dPadButton > .material-icons {
    position: relative;
    top: 12px;
    left: 12px;
  }

  .pdButton {
    width: 60px;
    height: 60px;
  }

</style>
