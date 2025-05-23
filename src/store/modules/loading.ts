/**loading相关仓库
 * 不需要持久化
 * @loading loading数据数组
 */
import { defineStore } from 'pinia'
import { store } from '@/assets/script/setup'

export const useLoadingStore = defineStore({
  id: 'loading',
  state: (): { loading: any[] } => {
    return {
      loading: []
    }
  },
  getters: {
    // 返回当前loading的长度
    getLoadingLength(): number {
      return this.loading.length
    },
    getLoading(): Array<string | 1> {
      return this.loading
    }
  },
  actions: {
    /**增加数据至loading数组
     * @apiName loading数据的标识符号，如果不需要针对性处理，可以默认
     */
    addLoading(dom: string | 1 = 1) {
      this.loading.push(dom)
    },
    /**从loading数组删除数据
     * @apiName loading数据的标识符号，如果不需要针对性处理，可以默认
     */
    removeLoading(dom: string | 1 = 1) {
      const index = this.loading.findIndex((item) => item === dom)
      index !== undefined && this.loading.splice(index, 1)
    },
    /**清空loading数据，也就是全局解除loading状态
     * 重要，在组件卸载时务必调用
     */
    clearLoading() {
      this.loading = []
    }
  }
})

export const useLoadingStoreOutside = () => {
  return useLoadingStore(store)
}
