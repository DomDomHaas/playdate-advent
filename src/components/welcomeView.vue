<script setup lang="ts">
  import { Card, Row, Col } from 'ant-design-vue';
/*
  import Time from "@/components/time.vue";
*/

</script>

<template>
  <Card :title="'Welcome to the Playdate Advent Calender'"
        class="appCard" >

    <Row style="padding-bottom: 16px;">
      <Col :span="24" >
        {{ "It's that time of the year... not just getting ready for the holidays but counting down to the big day with a daily Playdate surprise. No shaking is allowed, but there will be tons of unwrapping, and I'm sure there will be cranking." }}
        <br />
        {{ 'Are you ready?' }}
        <br />
        {{ '#PlaydateAdventCalendar' }}
      </Col>
    </Row>

    <Row>
      <Col :span="24" style="font-size: 1.1em;">
        How to?
      </Col>

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

<!--
    <Row style="padding-top: 16px;">
      <Col :span="24"
           style="font-size: 1.1em;" >
        <Time />
      </Col>
    </Row>
-->

  </Card>
</template>

<style scoped>

</style>
