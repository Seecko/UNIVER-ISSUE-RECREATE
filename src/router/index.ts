import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      redirect: 'a'
    },
    {
      path: '/a',
      name: 'a',
      component: () => import('@/views/TestView.vue')
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
