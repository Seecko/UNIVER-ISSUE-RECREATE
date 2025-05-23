<template>
  <div class="checkup-report">
    <div class="header">
      <div class="btn" @click="saveUniver()">SAVE</div>
      <div class="btn" @click="loadUniver()">LOAD</div>
      <div class="btn" @click="clearLocal()">CLEAR</div>
    </div>
    <div class="content">
      <div ref="univerContainer" class="univer"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, toRaw, watch } from 'vue'
/**univer部分 */
// 基础功能
import { createUniver, defaultTheme, LocaleType, merge, type Univer, type FUniver } from '@univerjs/presets'
import {
  AddRangeProtectionFromContextMenuCommand,
  AddRangeProtectionFromSheetBarCommand,
  AddRangeProtectionFromToolbarCommand,
  type FWorkbook,
  SetTabColorCommand,
  UniverSheetsCorePreset,
  ViewSheetPermissionFromContextMenuCommand,
  ViewSheetPermissionFromSheetBarCommand
} from '@univerjs/presets/preset-sheets-core'
import UniverPresetSheetsCoreEnUS from '@univerjs/presets/preset-sheets-core/locales/en-US'
// 数据验证
import { UniverSheetsDataValidationPreset } from '@univerjs/presets/preset-sheets-data-validation'
import UniverPresetSheetsDataValidationEnUS from '@univerjs/presets/preset-sheets-data-validation/locales/en-US'
// 绘图部分，例如插入图片
import { UniverSheetsDrawingPreset } from '@univerjs/presets/preset-sheets-drawing'
import UniverPresetSheetsDrawingEnUS from '@univerjs/presets/preset-sheets-drawing/locales/en-US'
// 筛选
import { UniverSheetsFilterPreset } from '@univerjs/presets/preset-sheets-filter'
import UniverPresetSheetsFilterEnUS from '@univerjs/presets/preset-sheets-filter/locales/en-US'
// 排序
import { UniverSheetsSortPreset } from '@univerjs/presets/preset-sheets-sort'
import UniverPresetSheetsSortEnUS from '@univerjs/presets/preset-sheets-sort/locales/en-US'

/**onMounted */
onMounted(() => {
  init()
})
onBeforeUnmount(() => {
  disposeAll()
})

// 初始化
let tempTemplateDetail: any = null
async function init() {
  renderUniver()
}
// dispose各种事件
function disposeAll() {
  if (univerAPIRef.value) {
    toRaw(univerAPIRef.value)?.dispose()
    univerAPIRef.value = null
  }
  if (activeWorkbook.value) {
    toRaw(activeWorkbook.value)?.dispose()
    activeWorkbook.value = null
  }
  if (univerRef.value) {
    toRaw(univerRef.value)?.dispose()
    univerRef.value = null
  }
}
// 渲染univer
const univerContainer = ref()
const univerRef = ref<Univer | null>(null)
const univerAPIRef = ref<FUniver | null>(null)
const activeWorkbook = ref<FWorkbook | null>(null)
async function renderUniver() {
  disposeAll()
  const { univer, univerAPI } = createUniver({
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.EN_US]: merge(
        // 基础功能
        UniverPresetSheetsCoreEnUS,
        // 数据验证
        UniverPresetSheetsDataValidationEnUS,
        // 绘图部分，例如插入图片
        UniverPresetSheetsDrawingEnUS,
        // 筛选
        UniverPresetSheetsFilterEnUS,
        // 排序
        UniverPresetSheetsSortEnUS
      )
    },
    theme: defaultTheme,
    presets: [
      // 基础功能
      UniverSheetsCorePreset({
        container: univerContainer.value,
        menu: {
          [AddRangeProtectionFromToolbarCommand.id]: {
            // 工具栏新增保护
            hidden: true
          },
          [AddRangeProtectionFromContextMenuCommand.id]: {
            // 鼠标右键新增保护
            hidden: true
          },
          [ViewSheetPermissionFromContextMenuCommand.id]: {
            // 鼠标右键查看保护
            hidden: true
          },
          [AddRangeProtectionFromSheetBarCommand.id]: {
            // 左下工具栏新增保护
            hidden: true
          },
          [ViewSheetPermissionFromSheetBarCommand.id]: {
            // 左下工具栏查看保护
            hidden: true
          },
          // [DeleteRangeProtectionFromContextMenuCommand.id]: {
          //   // 鼠标右键删除保护，保留，因为如果去掉，右键保护的主菜单还会在，弹出框会变成没内容的框，不美观
          //   hidden: true
          // }
          // [SetRangeProtectionFromContextMenuCommand.id]: {
          //   // 鼠标右键编辑保护，无效，可能是因为上面设置的有冲突
          //   hidden: true
          // }
          [SetTabColorCommand.id]: {
            // 左下工具栏设置sheet颜色
            hidden: true
          }
        },
        header: true
      }),
      // 数据验证
      UniverSheetsDataValidationPreset(),
      // 绘图部分，例如插入图片
      UniverSheetsDrawingPreset(),
      // 筛选
      UniverSheetsFilterPreset(),
      // 排序
      UniverSheetsSortPreset()
    ]
  })
  // 创建工作表
  tempTemplateDetail ? univerAPI.createWorkbook(tempTemplateDetail) : univerAPI.createWorkbook({ name: 'Test' })
  univerRef.value = univer
  univerAPIRef.value = univerAPI
  activeWorkbook.value = univerAPIRef.value.getActiveWorkbook()
  setSheetsPermissions()
  await nextTick()
  setSheetsEditPermission(true)
}
// 表格权限
function setSheetsPermissions() {
  const unitId = activeWorkbook.value!.getId()
  const permission = activeWorkbook.value!.getPermission()
  // 新建
  const workbookCreateSheetPermission = permission.permissionPointsDefinition.WorkbookCreateSheetPermission
  // unitId 是工作簿的 id, WorkbookCreateSheetPermission 是权限点位, false 表示该权限不可使用
  permission.setWorkbookPermissionPoint(unitId, workbookCreateSheetPermission, false)
  // 删除
  const workbookDeleteSheetPermission = permission.permissionPointsDefinition.WorkbookDeleteSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookDeleteSheetPermission, false)
  // 重命名
  const workbookRenameSheetPermission = permission.permissionPointsDefinition.WorkbookRenameSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookRenameSheetPermission, false)
  // 隐藏
  const workbookHideSheetPermission = permission.permissionPointsDefinition.WorkbookHideSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookHideSheetPermission, false)
  // 复制，查询到的权限是undefined，不知为何，但本身好像就无法复制
  // const workbookDuplicateSheetPermission =
  //   permission.permissionPointsDefinition.WorkbookDuplicateSheetPermission
  // permission.setWorkbookPermissionPoint(unitId, workbookDuplicateSheetPermission, false)
  // 移动
  const workbookMoveSheetPermission = permission.permissionPointsDefinition.WorkbookMoveSheetPermission
  permission.setWorkbookPermissionPoint(unitId, workbookMoveSheetPermission, false)
  // 下面这行是用于去除权限提示弹窗的
  permission.setPermissionDialogVisible(false)
}
// 设置表格编辑权限
function setSheetsEditPermission(editable: boolean) {
  const unitId = activeWorkbook.value!.getId()
  const permission = activeWorkbook.value!.getPermission()
  const workbookEditPermission = permission.permissionPointsDefinition.WorkbookEditablePermission
  permission.setWorkbookPermissionPoint(unitId, workbookEditPermission, editable)
}
// 保存univer数据
function saveUniver() {
  tempTemplateDetail = activeWorkbook.value?.save()
  localStorage.setItem('univer-workbook', JSON.stringify(tempTemplateDetail))
}
// 加载univer数据
function loadUniver() {
  const localData = localStorage.getItem('univer-workbook')
  if (localData) {
    tempTemplateDetail = JSON.parse(localData)
  } else {
    tempTemplateDetail = { name: 'Test' }
  }
  renderUniver()
}
// 清除univer数据
function clearLocal() {
  localStorage.removeItem('univer-workbook')
}
</script>

<style lang="less" scoped>
@import '@/styles/style.less';

.checkup-report {
  .default(true);
  background-color: @bg-subtler-0_neutral-normal;
  height: 100%;
  .header {
    display: flex;
    align-items: center;
    height: 56px;
    margin-bottom: 4px;
    background-color: @bg-subtlest-0_neutral-normal;
    padding: 0 20px;
    .btn {
      display: inline-flex;
      align-items: center;
      padding: 0 12px;
      height: 32px;
      background-color: @bg-strong-8_viz-400_normal;
      color: @text-on_strong;
      border-radius: 4px;
      margin-right: 16px;
      cursor: pointer;
    }
  }
  .content {
    height: calc(100% - 64px);
    background-color: @bg-subtlest-0_neutral-normal;
    .univer {
      height: 100%;
    }
  }
}
</style>
<style lang="less">
@import '@/styles/style.less';
// 基础功能
@import '@univerjs/presets/lib/styles/preset-sheets-core.css';
// 数据验证
@import '@univerjs/presets/lib/styles/preset-sheets-data-validation.css';
// 绘图部分，例如插入图片
@import '@univerjs/presets/lib/styles/preset-sheets-drawing.css';
// 筛选
@import '@univerjs/presets/lib/styles/preset-sheets-filter.css';
// 排序
@import '@univerjs/presets/lib/styles/preset-sheets-sort.css';
</style>
