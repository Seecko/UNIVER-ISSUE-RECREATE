import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    redirect: '/univertest',
    children: []
  },
  {
    path: '/univertest',
    name: 'univertest',
    // component: Layout,
    redirect: '/univertest/energyCheckup',
    meta: {
      // title: '体检报告',
      // scUrl: '',
      // nameZH: '体检报告',
      // nameTW: '能效管理',
      // nameEN: 'EFF Manage',
      // nameJP: 'EFF Manage',
      // fullFlag: false,
      // alwaysShow: false
    },
    children: []
  },
  {
    path: '/univertest/energyCheckup',
    name: 'energyCheckup',
    redirect: '/univertest/energyCheckup/checkupReport',
    meta: {
      title: '能源体检',
      scUrl: '能源體檢',
      nameZH: '能源体检',
      nameTW: '',
      nameEN: 'Energy Checkup',
      fullFlag: false,
      alwaysShow: true
    },
    children: [
      {
        path: 'checkupReport',
        name: 'checkupReport',
        component: () => import('@/views/energyCheckup/checkupReport/index.vue'),
        redirect: '',
        meta: {
          title: '体检报告',
          scUrl: '',
          nameZH: '体检报告',
          nameTW: '體檢報告',
          nameEN: 'Checkup Report',
          fullFlag: false
        },
        children: []
      },
      {
        path: 'checkupSettings',
        name: 'checkupSettings',
        component: () => import('@/views/energyCheckup/checkupSettings/index.vue'),
        redirect: '',
        meta: {
          title: '指标配置',
          scUrl: '',
          nameZH: '指标配置',
          nameTW: '指標配置',
          nameEN: 'Indicator Setting',
          fullFlag: false
        },
        children: []
      },
      {
        path: 'checkupLibrary',
        name: 'checkupLibrary',
        component: () => import('@/views/energyCheckup/checkupLibrary/index.vue'),
        redirect: '',
        meta: {
          title: '企业指标库',
          scUrl: '',
          nameZH: '企业指标库',
          nameTW: '企業指標庫',
          nameEN: 'Indicator Library',
          fullFlag: false
        },
        children: []
      }
    ]
  }
]
