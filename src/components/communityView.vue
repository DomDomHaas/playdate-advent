<script setup lang="ts">
  import {Card} from 'ant-design-vue';
  import discordIcon from '@/assets/icons/ui/discord-logo.svg'
  import twitterIcon from '@/assets/icons/ui/twitter-logo.svg'
  import linkIcon from '@/assets/icons/ui/link-2.svg'
  import bookmark from '@/assets/icons/ui/bookmark.svg'
  import video from '@/assets/icons/ui/video.svg'
  import { usePlaydateStore } from '@/stores/pdStore';
  import { storeToRefs } from 'pinia';

  const playdateStore = usePlaydateStore();
  const { themeDark } = storeToRefs(playdateStore);

  const communityLinks = [
    {
      title: "News, reviews and much more on",
      text: "Hello Playdate Podcast",
      url: 'https://discord.gg/NKjqkXphM6',
      icon: discordIcon,
    },
    {
      title: "Checkout the",
      text: "Uncrank'd Community Magazine",
      url: 'https://xanialasagna.storenvy.com/',
      icon: linkIcon,
    },
    {
      title: 'The birthplace of this calendar',
      text: "on the Uncrank'd Discord",
      url: 'https://discord.gg/hQ76Xx833H',
      icon: discordIcon,
    },
    {
      title: 'Playdate Squad:',
      text: 'meet gamers and game devs alike',
      url: 'https://discord.gg/kXFwuz7q',
      icon: discordIcon,
    },
    {
      title: 'Looking for more Playdate Games?',
    },
    {
      title: 'Tiny Yellow Machine',
      text: 'Checkout the Playdate Directs',
      url: 'https://www.youtube.com/@TinyYellowMachine/featured',
      icon: video,
    },
    {
      title: 'Have a look at all ',
      text: 'Playdate Games on Itch.io',
      url: 'https://itch.io/games/tag-playdate',
      icon: linkIcon,
    },
    {
      title: 'Want to create Playdate Games?',
    },
    {
      title: 'Create Playdate Games',
      text: 'start without coding!',
      url: 'https://play.date/pulp',
      icon: linkIcon,
    },
    {
      title: 'Create Playdate Games',
      text: 'with coding!',
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
      title: 'Solo Game Dev?',
      text: 'Learn how to do it all by yourself!',
      url: 'https://valadria.itch.io/how-to-make-a-video-game-all-by-yourself',
      icon: bookmark,
    },
    {
      title: 'Playdate Devs Tweeting',
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
            class="appCard"
            :class="themeDark ? 'pdLinkColor pdBorderColor' : 'pdLinkColorInverted pdBorderColorInverted'"            
            >

        <div v-for="(communityObj, index) in communityLinks"
              :key="`communities_${index}`"
              style="padding-bottom: 4px;"
        >

          <div v-if="!communityObj.text">
            <strong>{{ communityObj.title }}</strong>
          </div>

          <div v-if="communityObj.text">
            {{ communityObj.title }}

            <img v-if="communityObj.icon"
                :src="communityObj.icon"
                alt="icon"
                style="padding-right: 5px;" />
            <a v-if="communityObj.url" :href="communityObj.url" target="_blank" >{{ communityObj.text }}</a>
          </div>
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
