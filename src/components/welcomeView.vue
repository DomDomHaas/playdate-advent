<script setup lang="ts">
  import { Card, Row, Col } from 'ant-design-vue';
  import { usePlaydateStore } from '@/stores/pdStore';
  import { storeToRefs } from "pinia";
  const playdateStore = usePlaydateStore();
  const { currentDateTime } = storeToRefs(playdateStore);


</script>

<template>
  <Card :title="`Welcome - PST Time: ${currentDateTime}`"
        class="appCard" >

    <Row>

      <Col :span="24">
        Use the Arrows to navigate the days in the calendar.
      </Col>

      <Col :span="24">
        A: Open a gift
      </Col>

      <Col :span="24">
        B: When looking at a gift, return to the calendar.
      </Col>

      <Col :span="24">
        Use the Arrows to navigate the days in the calendar.
      </Col>

    </Row>

  </Card>
</template>

<style scoped>

</style>
