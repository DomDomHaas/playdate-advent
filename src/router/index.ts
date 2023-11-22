import {createRouter, createWebHashHistory } from 'vue-router'
import playdatePage from "@/components/playdatePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:day',
      name: 'home',
      component: playdatePage,
    },
  ]
})

export default router
