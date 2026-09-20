import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { entry, libAssetFileNames, libResolve, libTerser } from './vite.config.lib.shared'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    ...libTerser,
    lib: {
      entry: entry('src/vue/index.ts'),
      name: 'PhoneSelect',
      fileName: format => `vue.${format}.js`,
      formats: ['es', 'umd']
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue', 'reka-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI'
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
