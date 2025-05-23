<template>
  <div class="SIDEBAR">
    <ul class="list-wrapper">
      <li v-for="route in routeList" :key="route.name" class="list-item">
        <div class="list-item-name-wrap" @click="clickItem(route, false)">
          <span class="list-item-name">{{ route.name }}</span>
          <div v-if="route.children && route.children.length" class="list-item-icon">
            <span v-if="!route.open">+</span>
            <span v-else>-</span>
          </div>
        </div>
        <ul v-if="route.children && route.children.length" class="sub-list-wrapper" :class="{ show: route.open }">
          <li v-for="subRoute in route.children" :key="subRoute.name" class="list-item sub-list-item">
            <div class="list-item-name-wrap sub-list-item-name-wrap" @click="clickItem(subRoute, true)">
              <span class="list-item-name sub-list-item-name">{{ subRoute.name }}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import * as lodash from 'lodash-es'

import { routes } from '@/router'

const router = useRouter()

const routeList = ref(lodash.cloneDeep(routes))
for (let index = 0; index < routeList.value.length; index++) {
  const route = routeList.value[index]
  if ((!route.children || !route.children.length) && !route.meta?.alwaysShow) {
    routeList.value.splice(index, 1)
    index--
  }
}

function clickItem(route: any, isSub: boolean) {
  if (!isSub && route.children && route.children.length) {
    route.open = !route.open
  } else {
    router.push(route.path)
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/style.less';

.SIDEBAR {
  .default(true);
  width: 200px;
  height: 100%;
  background-color: @bg-subtlest-0_neutral-normal;
  .list-wrapper {
    .list-item {
      .list-item-name-wrap {
        width: 100%;
        height: 38px;
        padding: 4px 8px;
        cursor: pointer;
        &:hover {
          background-color: @bg-subtler-13_emphasis-hover;
        }
        &:not(.sub-list-item-name-wrap) {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .list-item-name {
          font-size: 20px;
          &:not(.sub-list-item-name) {
            font-weight: bold;
          }
        }
        .list-item-icon span {
          font-size: 24px;
          font-weight: bold;
        }
      }
      .sub-list-wrapper {
        display: none;
        &.show {
          display: block;
        }
        .sub-list-item {
          padding-left: 16px;
        }
      }
    }
  }
}
</style>
