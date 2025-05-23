import type { Theme, ThemeData, ThemeType } from '@/types'
import { themes } from './theme-data'
import { THEME_KEY } from './theme-key'

const defaultThemeName: string = THEME_KEY.themeNames.lightTheme // 默认主题名用白色主题
let currentTheme: Theme // 当前主题配置
let styleElement: HTMLElement // 主题对应的style元素
let colorTransitionElement: HTMLElement // 主题切换时的渐变样式

// 初始化主题
function initTheme(themeType?: ThemeType): void {
  // 在window存放所有主题的配置
  ;(window as any)[THEME_KEY.themeCollection] = themes
  // 获取之前选择的主题名
  let themeName: string = window.localStorage.getItem(THEME_KEY.lastTheme) || (window as any)[THEME_KEY.lastTheme] // 主题名存放于localStorage和window
  if (themeType) {
    themeName = `${import.meta.env.VITE_SRP_NAME}-${themeType}-theme`
  }
  // 如果之前没有存主题名，使用默认主题，并且存入localStorage和window
  if (!themeName) {
    themeName = defaultThemeName
    window.localStorage.setItem(THEME_KEY.lastTheme, themeName)
    ;(window as any)[THEME_KEY.lastTheme] = themeName
  }

  createTransitionElement()
  // 应用之前选择的主题
  applyTheme(themes[themeName])
}

// 应用主题
function applyTheme(theme: Theme): void {
  // 先插入渐变效果
  addColorTransitionElement()
  currentTheme = theme
  // 不存在styleElement时先去文档流里找一下,还是找不到的话就重新生成并插入
  if (!styleElement) {
    const curStyleElement: HTMLElement = document.getElementById(THEME_KEY.styleElementId) as HTMLElement
    if (curStyleElement) {
      styleElement = curStyleElement
    } else {
      styleElement = document.createElement('style')
      styleElement.id = THEME_KEY.styleElementId
      document.head.appendChild(styleElement)
    }
  }
  // 切换style元素内容,并给style和body元素增加标识
  styleElement.innerText = `:host { ${formatCSSVariables(theme.data)} }`
  styleElement.setAttribute(THEME_KEY.themeAttributeName, currentTheme.id)
  document.body.setAttribute(THEME_KEY.themeAttributeName, currentTheme.id)
  // 更新内存中的上次主题
  window.localStorage.setItem(THEME_KEY.lastTheme, currentTheme.id)
  ;(window as any)[THEME_KEY.lastTheme] = currentTheme.id
  // 用完之后删除渐变效果,提升性能
  setTimeout(removeColorTransitionElement, 500)
}

// 格式化主题字符串
function formatCSSVariables(themeData: ThemeData) {
  return Object.keys(themeData)
    .map((cssVar: string) => {
      const res: string = '--' + cssVar + ':' + themeData[cssVar]
      return res
    })
    .join(';')
}

// 生成样式切换时的渐变效果style
function createTransitionElement(): void {
  colorTransitionElement = document.createElement('style')
  colorTransitionElement.id = THEME_KEY.transitionStyleElementId
  colorTransitionElement.innerText = `
      * {
        transition: background .3s ease-out, background-color .3s ease-out, border .3s ease-out, border-color .3s ease-out, box-shadow .3s ease-out, box-shadow-color .3s ease-out
      }
    `
}
// 把样式切换时渐变效果的style插入文档流
function addColorTransitionElement(): void {
  document.head.appendChild(colorTransitionElement)
}
// 把样式切换时渐变效果的style从文档流删除，因为这种全局渐变样式会影响性能
function removeColorTransitionElement(): void {
  if (!colorTransitionElement.parentElement) {
    return
  }
  colorTransitionElement.parentElement.removeChild(colorTransitionElement)
}

export const useTheme = () => {
  return {
    applyTheme,
    initTheme
  }
}
