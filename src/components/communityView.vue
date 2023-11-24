<script setup lang="ts">
  import {Row, Col, Card, Switch} from 'ant-design-vue';
  import {AccountBookOutlined, BulbFilled, BulbOutlined} from '@ant-design/icons-vue'
  import {usePlaydateStore} from "@/stores/pdStore";
  import {storeToRefs} from "pinia";

  const pdStore = usePlaydateStore();
  const { themeDark } = storeToRefs(pdStore);

  const changeTheme = (checked: boolean) => {
    pdStore.changeThemeDark(checked);
  }
</script>

<template>
  <Row :gutter="[8, 20]">

    <Col class="white-text"
          :span="24">

      <Row justify="end">
        <Col :span="18">Community Links</Col>
        <Col :span="6">
          <Switch :checked="themeDark"
                  @click="changeTheme"
          >
            <template #checkedChildren><BulbFilled/></template>
            <template #unCheckedChildren><BulbOutlined/></template>
          </Switch>
        </Col>
      </Row>

    </Col>

    <Col :span="24">
      <Card title="Playdate Devstaurant"
            class="appCard" >
        <a-icon>
          <AccountBookOutlined />
        </a-icon>
        Join the Discord <a href="https://discord.gg/bMB9yZTf" target="_blank" >https://discord.gg/bMB9yZTf</a>
      </Card>
    </Col>

    <Col :span="24">
      <Card title="Playdate Squad"
            class="appCard" >
        <a-icon>
          <AccountBookOutlined />
        </a-icon>
        Join the Discord
      </Card>
    </Col>

    <Col :span="24">
      <Card title="Hello PlayDate Podcast"
            class="appCard" >
        <a-icon>
          <AccountBookOutlined />
        </a-icon>
        Join the Discord
      </Card>
    </Col>

    <Col :span="24">
      <Card title="Hello PlayDate Podcast"
            class="appCard" >
        <a-icon>
          <AccountBookOutlined />
        </a-icon>
        <a href="https://itch.io/games/tag-playdate" target="_blank" >All Playdate games on Itch.io</a>
      </Card>
    </Col>

  </Row>
</template>

<style scoped>

</style>
