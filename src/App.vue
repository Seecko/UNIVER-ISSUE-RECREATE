<template>
  <ElConfigProvider :namespace="'el'" :locale="elLocale">
    <div class="APP" :class="{ 'WUJIE-APP': isWujie }">
      <common-header v-if="!isWujie" />
      <div class="BODY">
        <common-sidebar v-if="!isWujie" />
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
import { themes } from '@/hook/theme/theme-data'
import { i18n } from '@/assets/script/setup'
import type { CommonConfig, CurLocale } from '@/types'

import commonHeader from '@/components/common-header.vue'
import commonSidebar from '@/components/common-sidebar.vue'

const commonStore = useCommonStoreOutside()

const { initTheme, applyTheme } = useTheme()

onMounted(async () => {
  isWujie.value = !!window?.$wujie
  // 初始化多语言、orgId和主题化参数
  if (window?.$wujie?.props) {
    pageConfig.locale = window?.$wujie?.props.lang
    pageConfig.orgId = window?.$wujie?.props.orgId
    pageConfig.theme = window?.$wujie?.props.theme === '#fff' ? 'light' : 'dark'
  }
  initTheme(pageConfig.theme)
  // 多语言和org存到仓库
  commonStore.setConfig(unref(pageConfig))
  // userInfo存到仓库
  let userResponse = JSON.parse(localStorage.getItem('orgNum') || '{}')
  if (import.meta.env.VITE_HOST_PORT && !userResponse.data) {
    // TODO: 本地测试代码
    userResponse = {
      data: {
        id: 3,
        email: 'admin@advantech.com.cn',
        userName: 'admin@advantech.com.cn',
        firstName: 'asda',
        lastName: ''
      },
      status: 200
    }
  }
  if (userResponse.status === 200 && userResponse.data) {
    commonStore.setUserInfo(userResponse.data)
  }
  // 多语言
  await changeLocale(pageConfig.locale)
  // 主题化切换
  window?.$wujie?.bus?.$on('iemsTheme', (val: any) => {
    pageConfig.theme = val === '#fff' ? 'light' : 'dark'
    commonStore.setTheme(pageConfig.theme)
    const themeName = `${import.meta.env.VITE_SRP_NAME}-${pageConfig.theme}-theme`
    applyTheme(themes[themeName])
  })

  nextTick(() => {
    showPage.value = true
  })
})

const elLocaleMap = {
  'zh-cn': zhCn,
  'zh-tw': zhTw,
  en: en
}

const isWujie = ref(false)
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
  &:not(.WUJIE-APP) {
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
  &.WUJIE-APP {
    padding-top: 8px;
    padding-left: 8px;
    .BODY {
      height: 100%;
      .WRAPPER {
        height: 100%;
      }
    }
  }
}
</style>
