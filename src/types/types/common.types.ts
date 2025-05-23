import type { ThemeType } from './theme.types'

export type CurLocale = 'zh-cn' | 'zh-tw' | 'en'

export interface CommonConfig {
  locale: CurLocale
  orgId: number
  theme: ThemeType
}

export type UserInfo = UserInfoObj | null

export interface UserInfoObj {
  id: number
  userName: string
  email: string
  roles: UserRole[]
  orgs: OrgObj[]
  currentOrgId: number
}

export interface UserRole {
  id: number
  name: string
  orgId: number
}

export interface OrgObj {
  id: number
  name: string
}
