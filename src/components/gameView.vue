<script setup lang="ts">
  import gameGift from '@/assets/gameGift.png';
  import { Card, BadgeRibbon, Row, Col } from 'ant-design-vue';

  import {useCalendarStore} from "@/stores/calendarStore";
  import {computed} from "vue";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {storeToRefs} from "pinia";

  const calendarStore = useCalendarStore();
  const playdateStore = usePlaydateStore();
  const { themeDark } = storeToRefs(playdateStore);

  const adventGame = computed(() => {
    return calendarStore.selectedGame;
  })

  const discountText = computed(() => {
    if (adventGame.value?.Discount?.toLowerCase() !== 'free') {
      return `- ${adventGame.value?.Discount}`
    }

    return adventGame.value?.Discount;
  })

  const cardTitle = computed(() => {
    if (calendarStore.currentDayUnlocked) {
      // return `Advent Game #${adventGame.value.Day}: ${adventGame.value.Name}`;
      return `${adventGame.value.Name}`;
    }

    return `Advent Gift of Day ${adventGame.value.Day}`;
  })

</script>

<template>
  <BadgeRibbon :text="discountText"
                color="gold">

  <Card :title="cardTitle"
        :bordered="true"
        class="gameView"
        :class="themeDark ? 'pdCoverInverted' : 'pdCover'"  >

    <Row v-if="calendarStore.currentDayUnlocked"
         :gutter="[0, 10]">

      <Col :span="24"
           class="appCardText gameViewContent">
<!--
        Advent Gift # {{ adventGame.Day }} is provided by {{ adventGame.DevUrl ? `<a href="${adventGame.DevUrl}}"` : adventGame.Dev }}
-->
        Advent Gift # {{ adventGame.Day }} is provided by {{ adventGame.Dev }}
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

      <Col v-if="adventGame.DevUrl"
           class="gameViewContent"
      >
        All game from {{ adventGame.Dev }} on itch.io:

        <a :href="adventGame.DevUrl" target="_blank" >{{adventGame.DevUrl}}</a>
      </Col>

      <Col v-if="adventGame.CatalogUrl"
           class="gameViewContent"
            >
        {{ adventGame.Name }} on Catalog:

        <a v-if="adventGame.Url"
           :href="adventGame.Url" target="_blank" >{{adventGame.Url}}</a>

      </Col>
    </Row>

    <Row v-if="!calendarStore.currentDayUnlocked"
         align="center"
         :gutter="[0, 5]">
      <Col :span="24"
            class="appCardText">
        Advent Gift with secret word "{{ adventGame["Secret words"] }}", can you I guess what it is?
      </Col>

      <Col :span="24"
           class="gameGift">
        <img :src="gameGift" alt="game present image">
      </Col>

    </Row>

<!--
  </div>
-->
  </Card>
  </BadgeRibbon>


</template>

<style>

  .gameGift > img {
    border-radius: 15px;
    width: 100%
  }

  .gameView .ant-card-head {
    padding: 10px !important;
  }

  .gameView .ant-card-body {
    padding: 15px 4px !important;
  }

  .iframe > iframe {
    border-radius: 15px;
  }

</style>

<style scoped>
  .gameView {
    /*
    width: 520px;
    height: 541px;
    */
    margin: 10px 0;
    border-radius: 25px !important;
    min-height: 280px;
    background-color: white;
  }

  .gameViewContent {
    padding: 0 10px;
  }

  .gameViewCard {
    border: white solid 1px;
    padding: 5px;
  }

</style>
