<script setup lang="ts">
  import { usePlaydateStore } from '@/stores/pdStore';
  import { Card, Row, Col } from 'ant-design-vue';
  import { storeToRefs } from 'pinia';

  const playdateStore = usePlaydateStore();
  const { themeDark } = storeToRefs(playdateStore);
    
</script>

<template>
  <Card title="Welcome to the Playdate Advent Calender!"
        class="appCard"
        :class="themeDark ? 'pdLinkColor pdBorderColor' : 'pdLinkColorInverted pdBorderColorInverted'"    
        >

    <Row style="padding-bottom: 16px;">
      <Col :span="24" >
        It's that time of the year... not just getting ready for the holidays but counting down to the big day with a daily Playdate surprise.
        There will be tons of unwrapping, and I'm sure there will be cranking!
        <br />
        <br />
        Enjoy cozy advent days with playdate games!
        <br />
        #PlaydateAdventCalendar
      </Col>
    </Row>

    <Row>
      <Col :span="24" style="font-size: 1.2em;">
        <strong>How to use the calendar?</strong>
      </Col>

      <Col :span="24">
        Use the arrow-keys of the playdate to navigate the calendar.
      </Col>

      <Col :span="24">
        A: Open a present, <br /> then use arrow-keys to look at the screenshots
      </Col>

      <Col :span="24">
        B: When looking at a present, return to the calendar.
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
