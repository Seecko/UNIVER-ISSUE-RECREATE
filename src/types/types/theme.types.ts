export interface Theme {
  id: string
  data: ThemeData
}

export interface ThemeData {
  [cssVarName: string]: string
}

export type ThemeType = 'light' | 'dark'
