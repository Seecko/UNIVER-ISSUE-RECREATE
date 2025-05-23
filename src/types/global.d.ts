declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>
declare type AxiosConfig = {
  params?: any
  data?: any
  url?: string
  method?: AxiosMethod
  headersType?: string
  responseType?: AxiosResponseType
  headers?: object
}

declare const $wujie: any

interface Window {
  $wujie: any
}
