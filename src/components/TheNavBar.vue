<script setup lang="ts">
  import {Row, Col, Switch} from 'ant-design-vue';

  import {storeToRefs} from "pinia";
  import {usePlaydateStore} from "@/stores/pdStore";
  import { BulbOutlined, BulbFilled } from '@ant-design/icons-vue'
  const pdStore = usePlaydateStore();
  const { themeDark } = storeToRefs(pdStore);

  const changeTheme = (checked: boolean) => {
    pdStore.changeThemeDark(checked);
  }

</script>

<template>

  <Row justify="space-between">
    <Col >
      Logo
    </Col>

    <Col class="pageTitle">
      Playdate Advent Calendar 2023
    </Col>

    <Col >
      <Switch :checked="themeDark"
              @click="changeTheme"
      >
        <template #checkedChildren><BulbFilled/></template>
        <template #unCheckedChildren><BulbOutlined/></template>
      </Switch>
    </Col>
  </Row>
</template>

<style scoped>
  .pageTitle {
    font-size: 1.5rem;
  }
</style>
