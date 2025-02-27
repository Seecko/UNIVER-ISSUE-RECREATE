<template>
  <div
    ref="appContainer"
    class="app-container-wrapper"
    :style="{
      width: appStyles.width,
      height: appStyles.height,
      transform: `scale(${appStyles.scale})`,
      top: `${appStyles.top}px`,
      left: `${appStyles.left}px`
    }"
  >
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import bus from 'vue3-eventbus'
import dayjs from 'dayjs'
import Big from 'big.js'
import lodash from 'lodash-es'

onMounted(() => {})

onUnmounted(() => {})

// 设置窗口缩放，使页面不管什么尺寸都能显示的下
const appContainer = ref()
const appStyles = ref({
  scale: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
})
</script>

<style lang="less" scoped>
@import '@/styles/style.less';
.app-container-wrapper {
  position: relative;
}
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  .dialog-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: @dialog-mask;
    opacity: 0.5;
  }
  .dialog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    .dialog-inner {
      padding: 20px 32px;
      font-size: 20px;
      line-height: 27px;
      font-weight: bold;
      color: @text-color-danger;
    }
  }
}
</style>
