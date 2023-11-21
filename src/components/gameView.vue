<script setup lang="ts">
  import { Card } from 'ant-design-vue';
  import {useCalendarStore} from "@/stores/store";
  import {computed} from "vue";

  const calendarStore = useCalendarStore();

  const adventGame = computed(() => {
    return calendarStore.selectedGame;
  })

  const cardTitle = computed(() => {
    if (calendarStore.currentDayUnlocked) {
      return `Advent Game #${adventGame.value.Day}: ${adventGame.value.Name}`;
    }

    return `Advent Gift of Day ${adventGame.value.Day}`;
  })

</script>

<template>
  <Card :title="cardTitle"
        :bordered="true">

    <div v-if="calendarStore.currentDayUnlocked">

      <div v-if="!adventGame.Iframe">

        <a v-if="adventGame.Url"
           :href="adventGame.Url" target="_blank" >{{adventGame.Url}}</a>
      </div>

      <div v-if="adventGame.Iframe"
           v-html="adventGame.Iframe"
           style="max-width: 527px;">
      </div>
    </div>
  </Card>

<!--
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
-->
</template>

<style scoped>

</style>
