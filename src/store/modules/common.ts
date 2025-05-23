import { defineStore } from 'pinia'
import { store } from '@/assets/script/setup'
import type { CommonConfig, CurLocale, ThemeType, UserInfo } from '@/types'

export const useCommonStore = defineStore({
  id: 'user',
  state: (): {
    config: CommonConfig
    userInfo: UserInfo
  } => {
    return {
      config: {
        locale: 'en',
        orgId: 1,
        theme: 'light'
      },
      userInfo: null
    }
  },
  getters: {
    getConfig(): CommonConfig {
      return this.config
    },
    getLocale(): CurLocale {
      return this.config.locale
    },
    getOrgId(): number {
      return this.config.orgId
    },
    getTheme(): ThemeType {
      return this.config.theme
    },
    getUserInfo(): UserInfo {
      return this.userInfo
    }
  },
  actions: {
    setConfig(v: CommonConfig) {
      this.config = v
    },
    setLocale(v: CurLocale) {
      this.config.locale = v
    },
    setOrgId(v: number) {
      this.config.orgId = v
    },
    setTheme(v: ThemeType) {
      this.config.theme = v
    },
    setUserInfo(v: UserInfo) {
      this.userInfo = v
    }
  }
})

export const useCommonStoreOutside = () => {
  return useCommonStore(store)
}
