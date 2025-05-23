import { i18n } from '@/assets/script/setup'

type I18nGlobalTranslationTm = {
  (key: string): any
  (key: string, locale: string): any
  (key: string, locale: string, list: unknown[]): any
  (key: string, locale: string, named: Record<string, unknown>): any
  (key: string, list: unknown[]): any
  (key: string, named: Record<string, unknown>): any
}

const getKey = (namespace: string | undefined, key: string) => {
  if (!namespace) {
    return key
  }
  if (key.startsWith(namespace)) {
    return key
  }
  return `${namespace}.${key}`
}

const useI18n = (namespace?: string) => {
  if (!i18n) {
    return {
      tm: (key: string) => {
        return getKey(namespace, key)
      }
    }
  }

  const { ...methods } = i18n.global

  const fn = (): I18nGlobalTranslationTm => {
    return (key: string) => {
      if (!key) return ''
      if (!key.includes('.') && !namespace) return key
      return i18n.global.tm(getKey(namespace, key))
    }
  }
  return {
    ...methods,
    tm: fn()
  }
}

function langFn(fullPath: string, ...arg: any[]) {
  const { tm } = useI18n()
  const res = tm(fullPath)
  switch (typeof res) {
    case 'string':
    case 'boolean':
    case 'number':
      return res
    case 'function':
      return res(...arg)
    case 'object':
      if (Array.isArray(res)) {
        return res
      } else if (!Object.keys(res).length) {
        return fullPath
      } else {
        return res
      }
    default:
      return res
  }
}

export function componentLang(componentPath: string, key: string, ...arg: any[]) {
  const fullPath = `checkup.components.${componentPath}.${key}`
  return langFn(fullPath, ...arg)
}

export function commonLang(key: string, ...arg: any[]) {
  const fullPath = `checkup.common.${key}`
  return langFn(fullPath, ...arg)
}
