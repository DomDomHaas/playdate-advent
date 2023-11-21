<script setup lang="ts">
  import {useCalendarStore} from "@/stores/store";
  import {computed} from "vue";

  const calendarStore = useCalendarStore();

  const adventGame = computed(() => {
    return calendarStore.selectedGame;
  })
</script>

<template>
  <div>
    <div v-if="!calendarStore.currentDayUnlocked">
      <h3>Advent Gift of Day {{ adventGame.Day }}</h3>

      {{ adventGame["Secret words"] }}

    </div>

    <div v-if="calendarStore.currentDayUnlocked">
      <h3>{{ `Advent Game #${adventGame.Day}: ${adventGame.Name}` }}</h3>


      <div v-if="!adventGame.Iframe">

        <a v-if="adventGame.Url"
           :href="adventGame.Url" target="_blank" >{{adventGame.Url}}</a>
      </div>

      <div v-if="adventGame.Iframe"
            v-html="adventGame.Iframe"
            style="max-width: 527px;">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
