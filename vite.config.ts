import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import EslintPlugin from 'vite-plugin-eslint'

const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

export default defineConfig({
  plugins: [
    vue(),
    EslintPlugin({
      // @ts-ignore
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
  server: {
    port: 3030,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {}
  }
})
