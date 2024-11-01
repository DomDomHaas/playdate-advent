import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools';

const version = process.env.npm_package_version;

// https://vitejs.dev/config/
export default ({ mode } : { mode: string}) => {

  const env = loadEnv(mode, process.cwd())
  const buildSourceMaps = env.VITE_BUILD_SOURCEMAPS === 'true'

  return defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: true, // css in js
          }),
        ],
      }),
      vueDevTools(),      
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      'process.env': loadEnv(mode, process.cwd()),
      'import.meta.env.VITE_VERSION': JSON.stringify(version),
    },
    base: './',
    build: {
      sourcemap: buildSourceMaps,
      // cssCodeSplit: true,
      outDir: 'dist',
      // outDir: 'public/assets/',
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          sanitizeFileName: false,
        },
      },
    },
  })
}
