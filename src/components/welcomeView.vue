<script setup lang="ts">
  import { Card } from 'ant-design-vue';


</script>

<template>
  <Card title="Welcome"
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
    </Row>

  </Card>
</template>

<style scoped>

</style>
