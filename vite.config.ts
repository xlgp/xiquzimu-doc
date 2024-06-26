import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    envPrefix: "XQZM_",
    plugins: [
      vue(),
      AutoImport({ /* options */ }),
      legacy({
        targets: ['defaults', 'ie >= 11', 'Chrome >= 52'],  //需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks: true,
        modernPolyfills: true
      }),
      Components({
        resolvers: [VantResolver()],
      }),],
  }
})

