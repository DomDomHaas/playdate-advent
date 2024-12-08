<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<script setup lang="ts">
  import gameGift from '@/assets/gameGift.png';
  // import surprise from '@/assets/surprise-small.gif';
  import gameGiftUnwrap from '@/assets/gameGiftUnwrap.gif';
  import { Card, BadgeRibbon, Row, Col, Button } from 'ant-design-vue';

  import {useCalendarStore} from "@/stores/calendarStore";
  import {computed, ref, watch} from "vue";
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

  const hasCoverUrl = computed(() => {
    return adventGame.value.CoverImgUrl;
  })


</script>

<template>
  <BadgeRibbon :text="discountText"
               class="discount"
               :class="!discountText ? 'hiddenRibbon' : ''"
               :style="xsAndSmLayout ? 'top: 0;' : ''"
               id="discount"
                color="gold">

  <Card :title="cardTitle"
        :bordered="true"
        id="gameView"
        class="gameView"
        :class="themeDark ? 'pdCoverInverted' : 'pdCover'"  >

    <audio id="sfx"
           ref="sfx"
           preload="auto"
           hidden="true" >
      <source :src="tada" type="audio/mpeg">
    </audio>

    <Row v-if="xsAndSmLayout && calendarStore.currentDayUnlocked"
         :gutter="[0, 5]">


      <Col v-if="hasCoverUrl"
           :span="24">
        <div class="coverImg">
          <img class="centerCatalog" height="200" :src="adventGame.CoverImgUrl" :alt="adventGame.Name">
        </div>
      </Col>

      <Col class="gameViewContent"
           style="width: 100%;"
            >

        <Row justify="space-between">
          <Col v-if="adventGame.Url">
            <Button type="primary" :href="`${adventGame.Url}/purchase?popup=1`" target="_blank">Get it on Itch.io</Button>
          </Col>
          <Col v-if="adventGame.Catalog">
            <Button type="primary" :href="adventGame.Catalog" target="_blank">Get it on Catalog</Button>
          </Col>
        </Row>
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

      <Col v-if="hasCoverUrl"
           :span="24">
        <div class="coverImg" >
          <img class="centerCatalog" height="200" :src="adventGame.CoverImgUrl" :alt="adventGame.Name">
        </div>
      </Col>

      <Col class="gameViewContent"
           style="width: 100%;"
            >

        <Row justify="space-between">
          <Col v-if="adventGame.Url">
            <Button type="primary" :href="`${adventGame.Url}/purchase?popup=1`" target="_blank">Get it on Itch.io</Button>
          </Col>
          <Col v-if="adventGame.Catalog">
            <Button type="primary" :href="adventGame.Catalog" target="_blank">Get it on Catalog</Button>
          </Col>
        </Row>
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
        Day {{ adventGame.Day }} with secret word "<strong>{{ adventGame["Secret words"] }}</strong>", what could it be?
      </Col>

      <Col :span="24"
           class="gameGift">

        <img v-show="calendarStore.dayIsOpening"
             :src="gameGiftUnwrap"
             alt="game unwrapping present gif">

        <div v-show="!calendarStore.dayIsOpening" >

          <img :src="gameGift" alt="game present image" />

<!--
          <img :src="surprise" alt="surprise box" />
-->
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

  .centerCatalog {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 560px) {
    .ant-ribbon {
      top: 0 !important;
    }  

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

  .coverImg {
    max-height: 200px;
    max-width: 100%;
    overflow: hidden;
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
