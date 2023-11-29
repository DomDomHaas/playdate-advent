<script setup lang="ts">
  import {Row, Col, Card, Switch} from 'ant-design-vue';

  const communityLinks = [
    {
      title: 'Playdate Devstaurant',
      text: 'Join the Discord',
      url: 'https://discord.gg/bMB9yZTf',
    },
    {
      url: 'https://xanialasagna.storenvy.com/products/36635764-uncrank-d-magazine-digital',
    },
    {
      title: 'All Playdate Games on Itch.io',
      text: '',
      url: 'https://itch.io/games/tag-playdate',
    }
  ];

</script>

<template>
<!--
  <Row :gutter="[8, 20]" >

    <Col :span="24">
-->
      <Card title="Join the Playdate Communities"
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
