/**
 * loading相关hook
 * 如果需要单独元素的loading，请自行处理
 */
import { onBeforeUnmount, watch } from 'vue'
import { ElLoading } from 'element-plus'
import lodash from 'lodash-es'
import { useLoadingStoreOutside } from '@/store'
import { compareTwoArr } from '@/utils'

const defaultLoadingDom = '#app'

/**
 * 需要直接执行，将钩子插入到组件中
 */
export const useLoading = () => {
  // 初始化store
  const loadingStore = useLoadingStoreOutside()
  // 声明全局loading实例
  const loadingInstances: any[] = []
  let tempLoading: Array<string | 1>
  // 检测全局loading数组，有内容的时候显示loading，没有的时候关闭
  watch(
    () => loadingStore.getLoadingLength,
    (newLen, oldLen) => {
      // 根据前后长度不同判断是addLoading还是removeLoading
      if (newLen - (oldLen || 0) > 0) {
        addLoading()
      } else if (newLen - (oldLen || 0) < 0) {
        removeLoading()
      }
      tempLoading = lodash.cloneDeep(loadingStore.getLoading)
    },
    { immediate: true, deep: true }
  )

  // 增加loading实例
  function addLoading() {
    // 比对前后获取差异的flag，可能是dom拼接的string，或者1
    const loadingArr = compareTwoArr(loadingStore.getLoading, tempLoading)
    loadingArr.forEach((loadingFlag) => {
      // 获取实际dom
      const loadingDom = loadingFlag === 1 ? defaultLoadingDom : loadingFlag
      // 在已有的loading实例中查找是否有对应dom上的loading实例
      const curIns = loadingInstances.find((ins) => {
        return ins.target._object.target === document.querySelector(loadingDom)
      })
      // 根据上一步查找的实例，有的话就不处理，没有的话在数组中添加
      if (!curIns) {
        loadingInstances.push(ElLoading.service({ target: loadingDom }))
      }
    })
  }

  // 移除loading实例
  function removeLoading() {
    // 比对前后获取差异的flag，可能是dom拼接的string，或者1
    const loadingArr = compareTwoArr(tempLoading, loadingStore.getLoading)
    loadingArr.forEach((loadingFlag) => {
      // 获取实际dom
      const loadingDom = loadingFlag === 1 ? defaultLoadingDom : loadingFlag
      // 看loading数组是否还存在同样的dom
      const sameFlagLen = loadingStore.getLoading.filter((flag) => flag === loadingFlag).length
      // 如果不存在，就证明此dom的loading被清空，就关闭loading并从实例数组剔除，否则证明dom的loading依然存在，就不做处理
      if (!sameFlagLen) {
        const curIndex = loadingInstances.findIndex((ins) => {
          return ins.target._object.target === document.querySelector(loadingDom)
        })
        const loadingIns = loadingInstances.splice(curIndex, 1)[0]
        const closeFn = loadingIns && loadingIns.close
        if (closeFn) {
          // 做保险，有时初始化会报错close不存在
          closeFn()
        }
      }
    })
  }

  // 卸载的时候清空loading数组，触发watch则可以关闭所有loading
  onBeforeUnmount(() => {
    loadingStore.clearLoading()
    if (loadingInstances.length) {
      loadingInstances.forEach((ins) => {
        ins.close()
      })
    }
    loadingInstances.length = 0
  })

  return loadingStore
}
