import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const app = createApp(App)

// import 'ant-design-vue/dist/reset.css';

app.use(createPinia())
app.use(router)

app.mount('#app')
