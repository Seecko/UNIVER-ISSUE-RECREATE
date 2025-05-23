import { createApp } from 'vue'
import App from './App.vue'
import { setupAll } from './assets/script/setup'

import 'element-plus/dist/index.css'
import '@/styles/style.less'

const app = createApp(App)

setupAll(app).then(() => {
  app.mount('#app')
})
