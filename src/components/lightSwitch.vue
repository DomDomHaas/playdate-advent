<script setup lang="ts">
  import {BulbFilled, BulbOutlined} from "@ant-design/icons-vue";
  import {Switch} from "ant-design-vue";
  import {usePlaydateStore} from "@/stores/pdStore";
  import {ref, watch} from "vue";
  import {storeToRefs} from "pinia";
  const playdateStore = usePlaydateStore();

  const { themeDark } = storeToRefs(playdateStore);

/*
  watch(checked,
      (newValue) => {
    playdateStore.changeThemeDark(newValue);
  })
*/

  function changeTheme(newValue: boolean) {
    playdateStore.changeThemeDark(newValue);
  }

</script>

<template>
  <div class="white-text">
    {{ themeDark ? 'Turn off the lights?' : 'Turn on the lights?'}}

    <Switch :checked="themeDark"
            class="white-text"
            @change="changeTheme">
      <template #checkedChildren><BulbFilled/></template>
      <template #unCheckedChildren><BulbOutlined/></template>
    </Switch>
  </div>
</template>

<style scoped>

</style>
