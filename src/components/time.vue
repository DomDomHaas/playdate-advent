<script setup lang="ts">
import { usePlaydateStore } from '@/stores/pdStore';
import { storeToRefs } from "pinia";
const playdateStore = usePlaydateStore();
const { currentDateTime } = storeToRefs(playdateStore);

</script>

<template>
  <div >
    {{ `Calender is based on PST Time: ${currentDateTime}` }}
  </div>
</template>

<style scoped>

</style>
