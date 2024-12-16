<template>
  <div class="">

    <Row>
      <Col :span="10">
        <div class="cover" >
          <img
            class="centerCatalog"
            height="200"
            :src="coverImgUrl"
            />
        </div>
      </Col>

      <Col :span="14"
        class="cardContent">
        <Row>
          <Col :span="24">
            {{ title }}
          </Col>
          <Col :span="24">
            Text
          </Col>

          <Col :span="24">
            <Row>
              <Col>
                {{ oldPrice }} {{ newPrice }}
              </Col>
              <Col>
                {{ discount }}
              </Col>
            </Row>
          </Col>

          <!-- v-if="itchUrl" -->
          <Col
            :span="12">
            <Button
              class="cardButton"
              type="primary"
              :href="`${itchUrl}/purchase?popup=1`"
              target="_blank">
              Get it on Itch.io
            </Button>
          </Col>

          <!-- v-if="catalogUrl" -->
          <Col
            :span="12"
            >
            <Button
              class="cardButton"
              type="primary"
              :href="catalogUrl"
              target="_blank">
              Get it on Catalog
            </Button>
          </Col>

        </Row>
      </Col>

    </Row>

  </div>

</template>

<script setup lang="ts">
  import {computed, type Ref} from "vue";
  import { Row, Col, Button } from 'ant-design-vue';

  import type {ScreenMap} from "ant-design-vue/es/_util/responsiveObserve";
  import useBreakpoint from "ant-design-vue/es/_util/hooks/useBreakpoint";

  const {
    title,
    coverImgUrl,
    itchUrl,
    catalogUrl,
    newPrice,
    oldPrice,
  } = defineProps<{
    title: string,
    coverImgUrl: string,
    itchUrl: string,
    catalogUrl: string,
    newPrice: number,
    oldPrice: number,
  }>()


  const breaks: Ref<ScreenMap> = useBreakpoint();

  const discount = computed(() => {
    
    return Math.floor((oldPrice / newPrice - 1) * 100);
  })

</script>

<style scoped>

  .cover {
    background-color: aqua;
  }

  .cardContent {
    padding: 12px;
  }

  .cardButton {
    padding: 4px 8px;
  }

  .calCard {
    text-align:center;
    border-radius: 25px;
    border: solid gray 1px;
    padding: 10px 10px 10px 15px;
  }

</style>
