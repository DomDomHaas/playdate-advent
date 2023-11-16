<script setup lang="ts">
const {
  unlocked,
  day,
  gameTitle,
  url,
} = defineProps<{
  unlocked: boolean,
  day: number,
  gameTitle: string,
  url: string,
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
      <h3>{{ gameTitle }}</h3>


      <a v-if="url"
         :href="url" target="_blank" >{{url}}</a>
    </div>
  </div>
</template>

<style scoped>

</style>
