<script setup lang="ts">
  import { usePlaydateStore } from '@/stores/pdStore';
  import {Row, Col, Card} from 'ant-design-vue';
  import { storeToRefs } from 'pinia';

  const playdateStore = usePlaydateStore();
  const { themeDark } = storeToRefs(playdateStore);

  const credits = [
    {
      name: 'Dominik Haas',
      role: 'Web Dev, Conception & Communication',
      itch: 'https://dominik-haas.itch.io',
      social: 'linktr.ee/dominikhaas',
    },
    {
      name: 'Xania Lasagna',
      role: 'Art, Conception & Marketing ',
      itch: 'https://xanialasagna.itch.io',
      social: 'https://linktr.ee/xanialasagna',
    },
    {
      name: 'Pizza Fuel Dev',
      role: 'Conception & Communication',
      itch: 'https://pizzafuel.itch.io/',
      social: 'https://x.com/PizzaFuelDev',
    },
  ];

</script>

<template>
  <Card title="Credits"
        class="appCard"
        :class="themeDark ? 'pdLinkColor pdBorderColor' : 'pdLinkColorInverted pdBorderColorInverted'"    
        >

    <Row :gutter="[5, 10]">
      <Col v-for="(credit, index) in credits"
          :key="`credits_${index}`"
          :span="24"
          style="font-size: 12px;"          
          >
        <span>
          <strong>{{ credit.name }}</strong>: {{ credit.role }} <br />
          <a :href="credit.itch" target="_blank" >{{ credit.itch }}</a>
        </span>

        <span v-if="credit.social">
          <br />
          Follow via <a :href="credit.social" target="_blank" >{{ credit.social }}</a>
        </span>
      </Col>

      <Col>
        Do you enjoy the Advent Calendar?
        <br />
        Share the Advent Calendar, let others enjoy daily playdate surprises!
      </Col>

      <!-- <Col>
        Do you enjoy the Advent Calendar and want to support us?
        <br />
        A way to do that: Buy our Games via itch!
        <br />
        And share the Advent Calendar, let others enjoy daily playdate surprises!
      </Col> -->
      
    </Row>
  </Card>
</template>

<style scoped>

</style>
