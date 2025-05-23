/**数组相关util */
/**
 * 根据mainArr选出在targetArr没有的项
 * 例如主数组为[1, 1, 1, 2, 3]，被比对数组为[1, 3, 3, 4]，则会拿到[1, 1, 2]
 * @param mainArr 主数组，依据此数据来判断
 * @param targetArr 被比对数组
 * @returns 在主数组有，被比对数组没有的项
 */
export function compareTwoArr(mainArr: any[], targetArr: any[]) {
  const res: any[] = []
  const hasJudged: any[] = []
  mainArr.forEach((mainItem) => {
    if (!hasJudged.includes(mainItem)) {
      const mainLen = mainArr.filter((i) => i === mainItem).length
      const targetLen = targetArr.filter((i) => i === mainItem).length
      if (mainLen > targetLen) {
        res.push(...Array(mainLen - targetLen).fill(mainItem))
      }
      hasJudged.push(mainItem)
    }
  })
  return res
}
