import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PhoneSelect',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'vue-i18n'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-i18n': 'VueI18n'
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.svg')) {
            return 'assets/flags/[name][extname]'
          }
          return 'assets/[name][extname]'
        }
      }
    },
    copyPublicDir: false,
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  assetsInclude: ['**/*.svg'],
  optimizeDeps: {
    exclude: ['fs']
  }
})
