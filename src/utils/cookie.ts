/**
 * @name: 设置cookie值
 * @author: camellia
 * @date: 2020-12-28
 * @param:  cname   string  cookie名称
 * @param:  cvalue  any cookie值
 * @param:  exdays  number  cookie保存天数
 */
export const setCookie = (cname: string, cvalue: any, exdays = 720) => {
  const d = new Date()
  // d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  exdays = 1
  d.setTime(d.getTime() + 8 * 60 * 60 * 1000 + exdays * 40 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}
/**
 * @name: 获取cookie值
 * @author: camellia
 * @date: 2020-12-28
 */
export const getCookie = (cname: string) => {
  const name = cname + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1)
    if (c.indexOf(name) != -1) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
/**
 * @name: 清除cookie值
 * @author: camellia
 * @date: 2020-12-28
 * @param:  cname   string  cookie名称
 */
export const clearCookie = (cname: string) => {
  const d = new Date()
  d.setTime(-1)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + "=''; " + expires
}
