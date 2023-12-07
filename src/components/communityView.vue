<script setup lang="ts">
  import {Row, Col, Card} from 'ant-design-vue';

  const communityLinks = [
    {
      title: 'Hello, Playdate!',
      text: "Enjoy the Podcast and everything around the playdate",
      url: 'https://discord.gg/yg4wu7q6',
    },
    {
      title: 'Playdate Devstaurant',
      text: 'Join the birth place of the Advent Calendar',
      url: 'https://discord.gg/bMB9yZTf',
    },
    {
      title: 'Tiny Yellow Machine',
      text: 'Checkout the Playdate Directs',
      url: 'https://www.youtube.com/@TinyYellowMachine/featured',
    },
    {
      title: 'Playdate Squad Discord',
      text: 'Meet loads of game devs, some from Panic',
      url: 'https://discord.gg/4ZBEMZF9',
    },
    {
      title: 'Uncrank\'d',
      text: 'Checkout the Playdate community Magazine',
      url: 'https://xanialasagna.storenvy.com/products/36635764-uncrank-d-magazine-digital',
    },
    {
      title: 'All ',
      text: 'Playdate Games on Itch.io',
      url: 'https://itch.io/games/tag-playdate',
    },
    {
      title: 'You too can create Playdate Games!',
      text: 'Start without coding!',
      url: 'https://play.date/pulp',
    },
    {
      title: 'You too can create Playdate Games!',
      text: 'With coding!',
      url: 'https://sdk.play.date/',
    },
    {
      title: 'You are learning Lua?',
      text: 'Here is a book for you!',
      url: 'https://squidgod.itch.io/lua-for-game-development',
    },
    {
      title: 'Solo Game Dev? You can do it all by yourself',
      text: ' learn how with this book!',
      url: 'https://valadria.itch.io/how-to-make-a-video-game-all-by-yourself',
    },
  ];

</script>

<template>
<!--
  <Row :gutter="[8, 20]" >

    <Col :span="24">
-->
      <Card title="Playdate Communities"
            class="appCard" >
        <div v-for="(communityObj, index) in communityLinks" >
          {{ communityObj.title }} <a :href="communityObj.url" target="_blank" >{{ communityObj.text }}</a>
        </div>

<!--
        <Row :gutter="[5, 10]">
          <Col v-for="(communityObj, index) in communityLinks"
              :span="24">
            {{ communityObj.title }}: <a :href="communityObj.url" target="_blank" >{{ communityObj.text }}</a>
          </Col>
        </Row>
-->
      </Card>
<!--
    </Col>
  </Row>
-->
</template>

<style scoped>

</style>
