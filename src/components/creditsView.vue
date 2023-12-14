<script setup lang="ts">
  import {Row, Col, Card} from 'ant-design-vue';

  const credits = [
    {
      name: 'Dominik Haas',
      role: 'Web Development, Conception & Communication',
      itch: 'https://dominik-haas.itch.io',
      social: 'linktr.ee/dominikhaas',
    },
    {
      name: 'Xania Lasagna',
      role: 'Art, Conception & Marketing ',
      itch: 'https://xanialasagna.itch.io',
      social: 'https://x.com/XaniaLasagna',
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
  <Card title="The Santa Devs aka. Credits"
        class="appCard" >

    <Row :gutter="[5, 10]">
      <Col v-for="(credit, index) in credits"
          :span="24">
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
        Do you enjoy the Advent Calendar and want to support us?
        <br />
        A way to do that: Buy our Games via itch!
        <br />
        And share the Advent Calendar, let others enjoy daily playdate surprises!
      </Col>
    </Row>
  </Card>
</template>

<style scoped>

</style>
