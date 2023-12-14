<script setup lang="ts">
  import {Row, Col, Card} from 'ant-design-vue';
  import discordIcon from '@/assets/icons/ui/discord-logo.svg'
  import twitterIcon from '@/assets/icons/ui/twitter-logo.svg'
  import linkIcon from '@/assets/icons/ui/link-2.svg'
  import bookmark from '@/assets/icons/ui/bookmark.svg'
  import video from '@/assets/icons/ui/video.svg'

  const communityLinks = [
    {
      title: 'Hello, Playdate!',
      text: "Enjoy the Podcast and everything around the playdate",
      url: 'https://discord.gg/yg4wu7q6',
      icon: discordIcon,
    },
    {
      title: 'Playdate Devstaurant',
      text: 'Join the birth place of the Advent Calendar',
      url: 'https://discord.gg/bMB9yZTf',
      icon: discordIcon,
    },
    {
      title: 'Tiny Yellow Machine',
      text: 'Checkout the Playdate Directs',
      url: 'https://www.youtube.com/@TinyYellowMachine/featured',
      icon: video,
    },
    {
      title: 'Playdate Squad Discord',
      text: 'Meet gamers and game devs, some even from Panic',
      url: 'https://discord.gg/4ZBEMZF9',
      icon: discordIcon,
    },
    {
      title: 'Checkout the Community Magazine',
      text: 'Uncrank\'d',
      url: 'https://xanialasagna.storenvy.com/products/36635764-uncrank-d-magazine-digital',
      icon: linkIcon,
    },
    {
      title: 'Have a look at all ',
      text: 'Playdate Games on Itch.io',
      url: 'https://itch.io/games/tag-playdate',
      icon: linkIcon,
    },
    {
      title: 'You too can create Playdate Games!',
      text: 'Start without coding!',
      url: 'https://play.date/pulp',
      icon: linkIcon,
    },
    {
      title: 'You too can create Playdate Games!',
      text: 'With coding!',
      url: 'https://sdk.play.date/',
      icon: linkIcon,
    },
    {
      title: 'You are learning Lua?',
      text: 'Here is a book for you!',
      url: 'https://squidgod.itch.io/lua-for-game-development',
      icon: bookmark,
    },
    {
      title: 'Solo Game Dev? You can do it all by yourself',
      text: ' learn how with this book!',
      url: 'https://valadria.itch.io/how-to-make-a-video-game-all-by-yourself',
      icon: bookmark,
    },
    {
      title: 'What are Playdate Devs Tweeting?',
      text: 'Follow this list on Twitter',
      url: 'https://twitter.com/i/lists/1609957861307580416',
      icon: twitterIcon,
    }
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
          {{ communityObj.title }}
          <br />
          <img v-if="communityObj.icon"
               :src="communityObj.icon"
               alt="icon"
               style="padding-right: 5px;" />
          <a :href="communityObj.url" target="_blank" >{{ communityObj.text }}</a>
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
