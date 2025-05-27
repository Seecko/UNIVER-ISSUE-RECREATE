<template>
  <ElConfigProvider :namespace="'el'" :locale="elLocale">
    <div class="APP">
      <common-header />
      <div class="BODY">
        <common-sidebar />
        <div class="WRAPPER">
          <RouterView v-if="showPage" />
        </div>
      </div>
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, unref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import en from 'element-plus/es/locale/lang/en'

import { useCommonStoreOutside } from '@/store'
import { useTheme } from '@/hook/theme/useTheme'
import { i18n } from '@/assets/script/setup'
import type { CommonConfig, CurLocale } from '@/types'

import commonHeader from '@/components/common-header.vue'
import commonSidebar from '@/components/common-sidebar.vue'

const commonStore = useCommonStoreOutside()

const { initTheme, applyTheme } = useTheme()

onMounted(async () => {
  initTheme(pageConfig.theme)
  // 多语言和org存到仓库
  commonStore.setConfig(unref(pageConfig))
  // 多语言
  await changeLocale(pageConfig.locale)

  nextTick(() => {
    showPage.value = true
  })
})

const elLocaleMap = {
  'zh-cn': zhCn,
  'zh-tw': zhTw,
  en: en
}

const showPage = ref(false)

const pageConfig = reactive<CommonConfig>({
  locale: 'en',
  orgId: 1,
  theme: 'light'
})

const elLocale = computed(() => {
  return elLocaleMap[pageConfig.locale]
})

const changeLocale = async (locale: CurLocale) => {
  const globalI18n = i18n.global
  const langModule = await import(`@/locales/${locale}.ts`)
  globalI18n.setLocaleMessage(locale, langModule.default)
  if ((i18n.global.locale as any).value) {
    ;(i18n.global.locale as any).value = locale
  } else {
    i18n.global.locale = locale
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/style.less';

.APP {
  .default();
  width: 100%;
  height: 100%;
  background-color: @bg-subtler-0_neutral-normal;
  .BODY {
    margin-top: 8px;
    height: calc(100% - 68px);
    display: flex;
    align-items: center;
    .WRAPPER {
      margin-left: 8px;
      flex: 1;
      height: 100%;
      background-color: @bg-subtlest-0_neutral-normal;
    }
  }
}
</style>
