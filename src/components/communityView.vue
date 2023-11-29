<script setup lang="ts">
  import {Row, Col, Card} from 'ant-design-vue';

  const communityLinks = [
    {
      title: 'Hello Playdate Podcast',
      text: 'Join the Discord',
      url: 'https://discord.gg/yg4wu7q6',
    },
    {
      title: 'Playdate Devstaurant',
      text: 'Join the Discord',
      url: 'https://discord.gg/bMB9yZTf',
    },
    {
      title: 'Uncrank\'d',
      text: 'Checkout the Playdate community Magazine',
      url: 'https://xanialasagna.storenvy.com/products/36635764-uncrank-d-magazine-digital',
    },
    {
      title: 'All Playdate Games on Itch.io',
      text: 'Itch playdate games',
      url: 'https://itch.io/games/tag-playdate',
    },
    {
      title: 'Tiny Yellow Machine',
      text: 'Join the Discord',
      url: 'https://discord.gg/WPtaQPzg',
    },
    {
      title: 'You can create Playdate Games!',
      text: 'Start Now without coding!',
      url: 'https://play.date/pulp',
    },
    {
      title: 'You can create Playdate Games!',
      text: 'You can code? Start here!',
      url: 'https://sdk.play.date/',
    },
    {
      title: 'Playdate Squad',
      text: 'Join the Discord to get help with coding',
      url: 'https://discord.gg/4ZBEMZF9',
    },
    {
      title: 'Solo Game Dev? You can do it!',
      text: 'Even all by yourself, learn how!',
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
        <Row :gutter="[5, 10]">
          <Col v-for="(communityObj, index) in communityLinks"
              :span="24">
            {{ communityObj.title }}: <a :href="communityObj.url" target="_blank" >{{ communityObj.text }}</a>
          </Col>
        </Row>
      </Card>
<!--
    </Col>
  </Row>
-->
</template>

<style scoped>

</style>
