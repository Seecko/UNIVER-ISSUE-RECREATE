import { createApp } from 'vue'
import eventBus from 'vue3-eventbus'
import App from './App.vue'
// 引入状态管理
import { setupStore } from '@/store'
// 路由
import { setupRouter } from '@/router'
// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus'
// 引入element-plus/icons-vue
import '@element-plus/icons-vue'
// 引入全局样式
import '@/styles/global.less'
import 'element-plus/dist/index.css'

let app: any
const setupAll = async () => {
  app = createApp(App)
  setupStore(app)
  setupElementPlus(app)
  setupRouter(app)
  app.use(eventBus)
  app.mount('#app')
}

setupAll().then(() => {})
