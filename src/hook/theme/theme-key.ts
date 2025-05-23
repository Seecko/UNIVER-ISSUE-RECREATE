const themePrefix = import.meta.env.VITE_SRP_NAME

export const THEME_KEY: {
  themeCollection: string
  themeNames: {
    lightTheme: string
    darkTheme: string
  }
  lastTheme: string
  styleElementId: string
  transitionStyleElementId: string
  themeAttributeName: string
  themeChangedEvent: string
} = {
  themeCollection: themePrefix + '-themes', // 存储所有主题的集合名
  themeNames: {
    // 主题名集合
    lightTheme: themePrefix + '-light-theme', // 白色主题名
    darkTheme: themePrefix + '-dark-theme' // 黑色主题名
  },
  lastTheme: themePrefix + '-last-theme', // 上次选择的主题键名
  styleElementId: themePrefix + '-theme-style', // DOM Style Element 的 id标识，标记css变量声明的片段
  transitionStyleElementId: themePrefix + '-theme-style-transition', // DOM Style Element 的 id标识，标记临时使用的css颜色动画
  themeAttributeName: themePrefix + '-theme', // body 和 style元素标记用户数据
  themeChangedEvent: themePrefix + '-theme-changed' // 通知主题变更用的事件名,目前使用vue3event-bus传递
}
