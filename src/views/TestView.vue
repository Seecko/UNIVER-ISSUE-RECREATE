<template>
  <div class="TestView">
    <div class="header">
      <div @click="showData">click</div>
    </div>
    <div class="body">
      <div class="side-bar">
        <ul class="side-list">
          <li
            class="side-item"
            v-for="(item, index) in sideList"
            :key="item.value"
            :draggable="true"
            @dragstart="onDragStart($event, item, index)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div class="univer-container">
        <div ref="univerContainer" class="univer" @dragover.prevent></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, onUnmounted, ref, toRaw } from 'vue'

// 基础功能
import { createUniver, defaultTheme, LocaleType, merge, type Univer } from '@univerjs/presets'
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core'
import UniverPresetSheetsCoreZhCN from '@univerjs/presets/preset-sheets-core/locales/zh-CN'
// 数据验证
import { UniverSheetsDataValidationPreset } from '@univerjs/presets/preset-sheets-data-validation'
import UniverPresetSheetsDataValidationZhCN from '@univerjs/presets/preset-sheets-data-validation/locales/zh-CN'
// 插件
import TestPlugin from '@/plugins/univer/TestPlugin'

/**onMounted */
onMounted(async () => {
  const { univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.ZH_CN]: merge(
        // 基础功能
        UniverPresetSheetsCoreZhCN,
        // 数据验证
        UniverPresetSheetsDataValidationZhCN,
        // 自定义国际化内容
        {
          permission: {
            dialog: {
              editErr: 'bbb'
            }
          }
        }
      )
    },
    theme: defaultTheme,
    presets: [
      // 基础功能
      UniverSheetsCorePreset({
        container: univerContainer.value
      }),
      // 数据验证
      UniverSheetsDataValidationPreset()
    ],
    // 插件
    plugins: [TestPlugin]
  })

  univerAPI.createUniverSheet({ name: 'Test Sheet' })
  univerAPIRef.value = univerAPI

  testFunctions()
})
onBeforeUnmount(() => {
  toRaw(univerAPIRef.value)?.dispose()
  univerAPIRef.value = null
})
onUnmounted(() => {})
/**国际化 */
/**仓库 */

function showData() {
  const activeWorkbook = univerAPIRef.value.getActiveWorkbook()

  console.log(activeWorkbook)

  const activeSheet = activeWorkbook.getActiveSheet()

  console.log(activeSheet)

  const saveData = activeWorkbook.save()

  console.log(saveData)
  // 获取数据验证
  const range = activeSheet.getRange('A2')
  const rangeValidations = range.getDataValidations()
  console.log(rangeValidations)
  const range2 = activeSheet.getRange('B2')
  // 设置数据验证
  range2.setDataValidation(rangeValidations[0])
  console.log(activeSheet.getDataValidations())
  // 获取工作表数据
  const snapshot = activeWorkbook.save()
  const sheet = Object.values(snapshot.sheets).find((sheet: any) => sheet.name === 'Test Sheet')
  console.log(sheet)
}

const univerContainer = ref()
const univerAPIRef = ref<Univer | null>(null)
async function testFunctions() {
  const activeWorkbook = univerAPIRef.value.getActiveWorkbook()
  const saveData = activeWorkbook.save()

  // 数据验证变化触发事件，记录对应range数据验证，记得dispose监听事件
  const dispose = activeWorkbook.onDataValidationChange((event) => {
    // event数据中有range，通过range再获取对应的数据验证，依次将range对应数据验证存起来
    // event中有本次数据验证操作的类型，add和update存的数据验证数据就是获取的数据，remove要存的是null
    console.log('===onDataValidationChange', event)
  })
  // 事件监听，同上，记得dispose
  const disposable = univerAPIRef.value.addEvent(univerAPIRef.value.Event.CellClicked, (params) => {
    console.log('监听事件触发')
    // const { worksheet, workbook, row, column, value } = params
    // console.log(
    //   `单元格被点击，行：${row}，列：${column}，workbook：${workbook}，worksheet：${worksheet}，value：${value}`
    // )
  })

  console.log(saveData)
  // 设置值
  const sheet = activeWorkbook.getActiveSheet()
  const range = sheet.getRange('A1:C1')
  range.setValue('First')
  // 设置权限
  setSheetsPermissions()
  await setCellsPermissions()
  // 设置拖拽
  setDragDrop()
}

// 表格权限
function setSheetsPermissions() {
  const activeWorkbook = univerAPIRef.value.getActiveWorkbook()
  const unitId = activeWorkbook.getId()
  const permission = univerAPIRef.value.getPermission()
  // 新建
  const workbookCreateSheetPermission =
    permission.permissionPointsDefinition.WorkbookCreateSheetPermission
  // unitId 是工作簿的 id, WorkbookCreateSheetPermission 是权限点位, false 表示该权限不可使用
  permission.setWorkbookPermissionPoint(unitId, workbookCreateSheetPermission, false)
  // 删除
  const workbookDeleteSheetPermission =
    permission.permissionPointsDefinition.WorkbookDeleteSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookDeleteSheetPermission, false)
  // 重命名
  const workbookRenameSheetPermission =
    permission.permissionPointsDefinition.WorkbookRenameSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookRenameSheetPermission, false)
  // 隐藏
  const workbookHideSheetPermission =
    permission.permissionPointsDefinition.WorkbookHideSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookHideSheetPermission, false)
  // 复制，查询到的权限是undefined，不知为何，但本身好像就无法复制
  // const workbookDuplicateSheetPermission =
  //   permission.permissionPointsDefinition.WorkbookDuplicateSheetPermission
  // permission.setWorkbookPermissionPoint(unitId, workbookDuplicateSheetPermission, false)
  // 移动
  const workbookMoveSheetPermission =
    permission.permissionPointsDefinition.WorkbookMoveSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookMoveSheetPermission, false)
  // // 编辑
  // const workbookEditPermission = permission.permissionPointsDefinition.WorkbookEditablePermission
  // permission.setWorkbookPermissionPoint(unitId, workbookEditPermission, false)
  // // 编辑---sheet权限
  // const subUnitId = activeWorkbook.getActiveSheet().getSheetId()
  // const worksheetEditPermission = permission.permissionPointsDefinition.WorksheetEditPermission
  // permission.setWorksheetPermissionPoint(unitId, subUnitId, worksheetEditPermission, false)
}

// 单元格权限
async function setCellsPermissions() {
  const activeWorkbook = univerAPIRef.value.getActiveWorkbook()
  const sheet = activeWorkbook.getActiveSheet()
  const unitId = activeWorkbook.getId()
  const subUnitId = sheet.getSheetId()
  // console.log(sheet)
  // console.log(unitId, subUnitId)
  const ranges = [sheet.getRange('B1')]
  // console.log(ranges)
  const permission = univerAPIRef.value.getPermission()
  const rangeProtectionPermissionEditPoint =
    permission.permissionPointsDefinition.RangeProtectionPermissionEditPoint
  const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges)
  // 下面这行是用于去除权限提示弹窗的
  // permission.setPermissionDialogVisible(false)
  // 这里的返回区别于工作表权限，因为一个子表中可能会有多个区域保护，所以 ruleId 是用来存储该权限规则的唯一 id，permissionId 是用来拼接权限点位的。
  const { permissionId, ruleId } = res
  // console.log(permissionId, ruleId)
  permission.setRangeProtectionPermissionPoint(
    unitId,
    subUnitId,
    permissionId,
    rangeProtectionPermissionEditPoint,
    false
  )
  // 下面是测试，不允许查看
  const disRanges = [sheet.getRange('C1')]
  const disPermission = univerAPIRef.value.getPermission()
  const rangeProtectionPermissionViewPoint =
    disPermission.permissionPointsDefinition.RangeProtectionPermissionViewPoint
  const rangeProtectionPermissionEditPoint2 =
    disPermission.permissionPointsDefinition.RangeProtectionPermissionEditPoint
  const disRes = await disPermission.addRangeBaseProtection(unitId, subUnitId, disRanges)
  disPermission.setRangeProtectionPermissionPoint(
    unitId,
    subUnitId,
    disRes.permissionId,
    rangeProtectionPermissionViewPoint,
    false
  )
  disPermission.setRangeProtectionPermissionPoint(
    unitId,
    subUnitId,
    disRes.permissionId,
    rangeProtectionPermissionEditPoint2,
    false
  )
  // 前后permissionId不同，推测多次设定要多次获取permissionId
  // console.log(permissionId, disRes.permissionId)
}

// 拖拽
const sideList = ref([
  {
    label: '壹',
    value: '1'
  },
  {
    label: '贰',
    value: '2'
  },
  {
    label: '叁',
    value: '3'
  }
])
function setDragDrop() {
  univerAPIRef.value.getSheetHooks().onCellDrop((cell) => {
    // 拿到当前鼠标指向的单元格
    console.log('drop', cell)
  })
}
function onDragStart(event, item, index) {
  console.log('onDragStart', event, item, index)
}
</script>

<style lang="less" scoped>
@import '@/styles/style.less';

.TestView {
  .default(true);
  width: 100%;
  height: 100%;
  background-color: pink;

  .header {
    background-color: aqua;
    width: 100%;
    height: 60px;
    margin-bottom: 8px;
  }

  .body {
    width: 100%;
    height: calc(100% - 68px);
    display: flex;
    align-items: center;

    .side-bar {
      background-color: olive;
      width: 240px;
      height: 100%;
      margin-right: 8px;
      position: relative;
      z-index: 10;
      .side-list {
        .side-item {
          background-color: red;
        }
      }
    }

    .univer-container {
      width: calc(100% - 248px);
      height: 100%;
      padding: 0 8px 8px 0;
      .univer {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<style lang="less">
// 基础功能
@import '@univerjs/presets/lib/styles/preset-sheets-core.css';
// 数据验证
@import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css';
</style>
