import {createRouter, createWebHashHistory } from 'vue-router'

// import TheCalendarOverview from "@/components/TheCalendarOverview.vue";
import TheCalendarPage from "@/components/TheCalendarPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'overview',
    //   component: TheCalendarOverview,
    // },
    {
      path: '/',
      redirect: { path: '/calender/2025/1' },
    },
    {
      path: '/calender/:year?/:day?',
      name: 'calender',
      component: TheCalendarPage,
    },
    // {
    //   path: '/:calender',
    //   name: 'calender',
    //   component: TheCalendarPage,
    //   children: [
    //     {
    //       path: '/:calender/:year',
    //       name: 'calender',
    //       component: TheCalendarPage,
    //     },
    //     {
    //       path: '/:calender/:year/:day',
    //       name: 'calender',
    //       component: TheCalendarPage,
    //     },
    //   ],
    // },
  ],
})

export default router
