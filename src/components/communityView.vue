<script setup lang="ts">
  import { Switch } from 'ant-design-vue';

  import {storeToRefs} from "pinia";
  import {usePlaydateStore} from "@/stores/pdStore";

  const pdStore = usePlaydateStore();
  const { themeDark } = storeToRefs(pdStore);

  const changeTheme = (checked: boolean) => {
    pdStore.changeThemeDark(checked);
  }

</script>

<template>
  <div>
    <Switch :checked="themeDark"
            @click="changeTheme"
    >

    </Switch>

    <h3>Right Side</h3>
    Community links, discord etc.
    Credits
  </div>
</template>

<style scoped>

</style>
