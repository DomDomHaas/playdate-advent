<script setup lang="ts">
  import playdateConsole from '@/assets/playdateCut.png';
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
  <div>
<!--
    <NuxtImg src="/playdateCut.png"  ></NuxtImg>
-->
    <img class="playdateFrame" :src="playdateConsole"  alt="playdate frame"/>

    <slot ></slot>

    <div class="dPadOverlay">
      <div :id="DPAD_T"
           class="dPadButton"
           @click="dPadClick">
      </div>
      <div :id="DPAD_L"
           class="dPadButton"
           style="top: 53px; left: -104px;"
           @click="dPadClick">
      </div>
      <div :id="DPAD_R"
           class="dPadButton"
           style="top: 55px; left: -47px;"
           @click="dPadClick">
      </div>
      <div :id="DPAD_B"
           class="dPadButton"
           style="top: 105px; left: -150px;"
           @click="dPadClick">
      </div>
    </div>

    <div class="buttonOverlay">
      <div :id="BUTTON_B"
           class="pdButton"
           @click="buttonClick">
      </div>

      <div :id="BUTTON_A"
           class="pdButton"
           style="position: relative; left: 53px"
           @click="buttonClick">
      </div>
    </div>

  </div>
</template>

<style scoped>
  .buttonOverlay,
  .dPadOverlay {
    position: absolute;
    display: flex;
  }

  .dPadOverlay {
    top: 312px;
    left: 64px;
  }

  .buttonOverlay {
    top: 325px;
    left: 272px;
  }

  .pdButton,
  .dPadButton {
    border: solid 1px black;
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

  .playdateFrame {
    position: absolute;
  }
</style>
