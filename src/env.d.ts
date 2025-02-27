/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASEPATH: string
  readonly VITE_BASE_PATH: string
  readonly VITE_DROP_DEBUGGER: string
  readonly VITE_DROP_CONSOLE: string
  readonly VITE_SOURCEMAP: string
  readonly VITE_OUT_DIR: string
  readonly VITE_TEST_USER_NAME: string
  readonly VITE_TEST_PASSWORD: string
  readonly VITE_APP_VERSION: string
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
