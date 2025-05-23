import type { App } from 'vue'
// pinia
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
export const store = createPinia()
store.use(piniaPluginPersist)
const setupStore = (app: App<Element>) => {
  app.use(store)
}
// element
import ElementPlus from 'element-plus'
const setupElement = (app: App<Element>) => {
  app.use(ElementPlus)
}
// router
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '@/router'
const setupRouter = (app: App<Element>) => {
  app.use(createRouter({ history: createWebHashHistory(), routes }))
}
// i18n
import { createI18n } from 'vue-i18n'
import type { I18n } from 'vue-i18n'
import { useCommonStoreOutside } from '@/store'
export let i18n: I18n
const setupI18n = async (app: App) => {
  const commonStore = useCommonStoreOutside()
  const curLocale = commonStore.getLocale
  const languages = ['zh-cn', 'en', 'zh-tw']
  const defaultLocal = await import(`../../locales/${languages.includes(curLocale) ? curLocale : 'en'}.ts`)
  const message = defaultLocal.default ?? {}
  const options = {
    locale: curLocale,
    fallbackLocale: 'en',
    messages: {
      [curLocale]: message
    },
    availableLocales: languages
  }
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
// 导出
export const syncSetups: any = { setupStore, setupElement, setupRouter }
export const setupAll = async (app: App<Element>) => {
  await setupI18n(app)
  Object.keys(syncSetups).forEach((k) => {
    syncSetups[k](app)
  })
}
