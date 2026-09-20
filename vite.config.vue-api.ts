import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { entry, libAssetFileNames, libResolve, libTerser } from './vite.config.lib.shared'

export default defineConfig({
  plugins: [vue()],
  build: {
    ...libTerser,
    lib: {
      entry: entry('src/vue-api/index.ts'),
      name: 'PhoneSelectVueApi',
      fileName: format => `vue-api.${format}.js`,
      formats: ['es', 'umd']
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        assetFileNames: libAssetFileNames
      }
    },
    copyPublicDir: false,
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: false,
    assetsInlineLimit: 0
  },
  resolve: libResolve,
  assetsInclude: ['**/*.svg'],
  optimizeDeps: {
    exclude: ['fs']
  }
})
