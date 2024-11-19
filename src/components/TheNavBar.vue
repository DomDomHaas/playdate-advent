<script setup lang="ts">
  // @ts-nocheck
  // import {Row, Col, Switch} from 'ant-design-vue';
  import {Menu, MenuItem} from 'ant-design-vue';

  // import {storeToRefs} from "pinia";
  // import {usePlaydateStore} from "@/stores/pdStore";
  // import { BulbOutlined, BulbFilled } from '@ant-design/icons-vue'
  import {useRouter} from "vue-router";
  import pacLogo from '@/assets/PAC_logo24_64.png';
  
  const {
    calendarYears,
  } = defineProps<{
    calendarYears: Array,
  }>()

  const router = useRouter();
  // const pdStore = usePlaydateStore();
  // const { themeDark } = storeToRefs(pdStore);

  // const changeTheme = (checked: boolean) => {
  //   // instead of boolean use CheckedType?
  //   pdStore.changeThemeDark(checked);
  // }

  const yearClick = (year) => {
    router.push(`/calender/${year}/1`);
  }

</script>

<template>

  <div class="logo">
    <img :src="pacLogo" />
  </div>

  <Menu mode="horizontal"
    class="navBar"
    :style="{ position: 'absolute', top: 0, left: '145px' }"
  >
    <MenuItem
      v-for="(year, index) in calendarYears"
      :key="index"
      class="navItem"
      @click="yearClick(year)"
      >
      Advent {{ year }}
    </MenuItem>
  </Menu>

</template>

<style scoped>

.navBar
.logo,
.logo > img {
  width: 32px;
  height: 32px;
}

.navBar {
  background-color: #11AC8E;
}

.navBarInvert {
  background-color: #7353D2;
}
</style>

<style>
  .ant-layout-header,
  .navBar {
    height: 32px !important;
    line-height: 32px !important;
  }
  
  .navItem:hover::after {
    border-bottom-color: #FFC900 !important;
  }

  .navItem:hover::after {
    border-bottom-color: #FFC900 !important;
  }
</style>

