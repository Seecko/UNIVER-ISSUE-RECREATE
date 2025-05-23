import { fileURLToPath, URL } from 'node:url'

import { loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import basicSSL from '@vitejs/plugin-basic-ssl'

const root = process.cwd()
const timeStamp = new Date().getTime()
const devHost = 'localhost'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log('Current command: ', command, ', current mode: ', mode, '.')
  const env = loadEnv(mode, root)
  const port = env.VITE_HOST_PORT ? Number(env.VITE_HOST_PORT) : 7000

  return {
    base: './',
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/*.ts', 'src/**/*.ts', 'src/*.vue', 'src/**/*.vue'],
        exclude: ['./node_modules/**']
      }),
      basicSSL()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnable: true
        }
      }
    },
    server: {
      port: port,
      cors: true, // 需要设置允许，否则主应用无法请求到资源
      origin: `https://localhost:${port}`,
      hmr: true,
      // @ts-expect-error: 可以使用，但是报错，本版本缺少了boolean类型的支持
      https: true,
      headers: {
        'Access-Control-Allow-Origin': '*' // 需要设置允许，否则主应用无法请求到资源
      },
      proxy: {}
    },
    build: {
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : true,
      rollupOptions: {
        output: {
          chunkFileNames: `${env.VITE_SRP_NAME}/js/[name]-[hash].${timeStamp}.js`,
          entryFileNames: `${env.VITE_SRP_NAME}/js/[name]-[hash].${timeStamp}.js`,
          assetFileNames: `${env.VITE_SRP_NAME}/static/[name]-[hash].[ext]`,
          manualChunks(id) {
            //静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
}
