<script setup lang="ts">
  import gameGift from '@/assets/gameGift.png';
  import gameGiftUnwrap from '@/assets/gameGiftUnwrap.gif';
  import { Card, BadgeRibbon, Row, Col } from 'ant-design-vue';

  import {useCalendarStore} from "@/stores/calendarStore";
  import {computed, onMounted, ref, watch} from "vue";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {storeToRefs} from "pinia";
  import type {Ref} from "vue";
  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";
  import tada from "@/assets/tada.mp3";

  const calendarStore = useCalendarStore();
  const playdateStore = usePlaydateStore();
  const { dayIsOpening } = storeToRefs(calendarStore);
  const { themeDark } = storeToRefs(playdateStore);

  const breaks: Ref<ScreenMap> = useBreakpoint();
  const xsAndSmLayout = computed(() => (breaks.value.xs || breaks.value.sm) && !breaks.value.md)

  const adventGame = computed(() => {
    return calendarStore.selectedGame;
  })

  const discountText = computed(() => {
    if (!calendarStore.currentDayUnlocked) {
      return ''
    }

    if (adventGame?.value?.Discount?.toLowerCase() !== 'free') {
      return `- ${adventGame?.value?.Discount}`
    }

    return adventGame?.value?.Discount;
  })

  const cardTitle = computed(() => {
    if (calendarStore.currentDayUnlocked) {
      // return `Advent Game #${adventGame.value.Day}: ${adventGame.value.Name}`;
      return `Advent Gift # ${adventGame.value.Day} is presented by ${adventGame.value.Dev}`;
    }

    return `Advent Gift of Day ${adventGame?.value.Day}`;
  })

  const sfx = ref<HTMLAudioElement>();

  watch(dayIsOpening, () => {
    sfx.value?.play();
  });

</script>

<template>
  <BadgeRibbon :text="discountText"
               :class="!discountText ? 'hiddenRibbon' : ''"
                color="gold">

  <Card :title="cardTitle"
        :bordered="true"
        class="gameView"
        :class="themeDark ? 'pdCoverInverted' : 'pdCover'"  >

    <audio id="sfx"
           ref="sfx"
           hidden="true" >
      <source :src="tada" type="audio/mpeg">
    </audio>

    <Row v-if="xsAndSmLayout && calendarStore.currentDayUnlocked"
         :gutter="[0, 5]">

      <Col v-if="!adventGame.Iframe"
           class="gameViewContent"
           :span="24">
        <a v-if="adventGame.Url"
           :href="adventGame.Url" target="_blank" >{{adventGame.Url}}</a>
      </Col>

      <Col v-if="adventGame.IframeMobile"
           :span="24"
           class="iframe"
           style="text-align: center;"
           v-html="adventGame.IframeMobile">
      </Col>

      <Col v-if="!adventGame.IframeMobile && adventGame.Iframe"
           :span="24"
           class="iframe"
           v-html="adventGame.Iframe">
      </Col>

      <Col v-if="adventGame.Catalog"
           class="gameViewContent" >
        Get it on Catalog:
        <a :href="adventGame.Catalog" target="_blank" >{{adventGame.Catalog}}</a>
      </Col >

      <Col v-if="adventGame.DevUrl"
           class="gameViewContent"
           style="padding-bottom: 5px;"
      >
        All games from {{ adventGame.Dev }} on itch.io:

        <a :href="adventGame.DevUrl" target="_blank" >{{adventGame.DevUrl}}</a>
      </Col>

      <Col v-if="adventGame.Notes"
           class="gameViewContent"
           v-html="adventGame.Notes" >
      </Col >

    </Row>

    <Row v-if="!xsAndSmLayout && calendarStore.currentDayUnlocked"
         :gutter="[0, 5]">

      <Col v-if="!adventGame.Iframe"
           :span="24"
           class="appCardText gameViewContent">
        {{ adventGame.Name }}
      </Col>

      <Col v-if="!adventGame.Iframe"
           class="gameViewContent"
           :span="24">
        <a v-if="adventGame.Url"
           :href="adventGame.Url" target="_blank" >{{adventGame.Url}}</a>
      </Col>

      <Col v-if="adventGame.Iframe"
           :span="24"
           class="iframe"
           style="border-radius: 25px;"
           v-html="adventGame.Iframe">
      </Col>

      <Col v-if="adventGame.Catalog"
           class="gameViewContent" >
        Get it on Catalog:
        <a :href="adventGame.Catalog" target="_blank" >{{adventGame.Catalog}}</a>
      </Col >

      <Col v-if="adventGame.DevUrl"
           class="gameViewContent"
           style="padding-bottom: 5px;"
      >
        All games from {{ adventGame.Dev }} on itch.io:

        <a :href="adventGame.DevUrl" target="_blank" >{{adventGame.DevUrl}}</a>
      </Col>

      <Col v-if="adventGame.Notes"
           class="gameViewContent"
           v-html="adventGame.Notes" >
      </Col >

    </Row>

    <Row v-if="!calendarStore.currentDayUnlocked"
         :gutter="[10, 10]">

      <Col :span="24"
            class="appCardText gameViewContent">
        Advent Gift with secret word "{{ adventGame["Secret words"] }}", what could it be?
      </Col>

      <Col :span="24"
           class="gameGift">

        <img v-if="calendarStore.dayIsOpening"
             :src="gameGiftUnwrap"
             alt="game unwrapping present gif">

        <div v-if="!calendarStore.dayIsOpening" >

          <img :src="gameGift" alt="game present image" />

          <div :class="`${ Number.parseInt(adventGame.Day, 10) > 9 ? 'giftNumberOverlay doubleDigit' : 'giftNumberOverlay'}` ">
            {{ adventGame.Day }}
          </div>
        </div>
      </Col>

    </Row>

<!--
  </div>
-->
  </Card>
  </BadgeRibbon>


</template>

<style>

  .hiddenRibbon {
    display: none;
  }

  .gameGift {
    /*
    width: 400px;
    */
    height: 175px;
    text-align: center;
  }

  .gameGift img {
    border-radius: 15px;
    height: 100%;
    max-width: 100%;
  }

  .gameView .ant-card-head {
    padding: 10px !important;
  }

  .gameView .ant-card-body {
    padding: 0 4px !important;
  }

  .iframe > iframe {
    padding: 10px 0;
    border-radius: 15px;
  }

</style>

<style scoped>
  .gameView {
    /*
    width: 520px;
    height: 541px;
    */
    height: 350px;
    margin: 10px 0;
    border-radius: 25px !important;
    min-height: 280px;
    background-color: #efefef;
  }

  .gameViewContent {
    padding: 0 20px !important;
  }

  .gameViewCard {
    border: white solid 1px;
    padding: 5px;
  }

  .giftNumberOverlay {
    position: absolute;
    top: 60px;
    left: 245px;
    font-size: 5rem;
    line-height: 0.7em;
    color: #efefef;
  }

  .doubleDigit {
    left: 220px;
  }

  @media (max-width: 560px) {
    .gameView {
      height: 380px;
    }

    .giftNumberOverlay {
      top: 46px;
      left: 150px;
    }

    .doubleDigit {
      left: 127px;
    }
  }

</style>
