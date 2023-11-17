<script setup lang="ts">
const {
  unlocked,
  day,
  gameTitle,
  url,
  iframe,
} = defineProps<{
  unlocked: boolean,
  day: number,
  gameTitle: string,
  url: string,
  iframe: string,
}>()
</script>

<template>
  <div>
    <div v-if="!unlocked">
      <h3>Game of Day {{ day }}</h3>

      The game info once one is selected, with screenshots and itch.io link
      Or it's a day in the future show the typically gift wrap from the playdate?

    </div>

    <div v-if="unlocked">
      <h3>{{ `Advent Game #${day}: ${gameTitle}` }}</h3>


      <div v-if="!iframe">

        <a v-if="!iframe"
           :href="url" target="_blank" >{{url}}</a>
      </div>

      <div v-if="iframe"
            v-html="iframe"
            style="max-width: 527px;">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
