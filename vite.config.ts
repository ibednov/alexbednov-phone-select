import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: 'dist/stats.html'
    // })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.ts'),
        core: resolve(__dirname, 'src/core/index.ts')
      },
      external: ['vue', 'reka-ui'],
      output: [
        // ES модули
        {
          entryFileNames: (chunkInfo) => {
            return chunkInfo.name === 'core' ? 'core.es.js' : 'alexbednov-phone-select.es.js'
          },
          format: 'es',
          exports: 'named',
          globals: {
            vue: 'Vue',
            'reka-ui': 'RekaUI'
          },
          assetFileNames: 'assets/[name][extname]'
        },
        // UMD модули
        {
          entryFileNames: (chunkInfo) => {
            return chunkInfo.name === 'core' ? 'core.umd.js' : 'alexbednov-phone-select.umd.js'
          },
          format: 'umd',
          name: (chunkInfo) => {
            return chunkInfo.name === 'core' ? 'PhoneSelectCore' : 'PhoneSelect'
          },
          exports: 'named',
          globals: {
            vue: 'Vue',
            'reka-ui': 'RekaUI'
          },
          assetFileNames: 'assets/[name][extname]'
        }
      ]
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
