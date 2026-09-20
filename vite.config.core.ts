import { defineConfig } from 'vite'
import { entry, libAssetFileNames, libResolve, libTerser } from './vite.config.lib.shared'

export default defineConfig({
  build: {
    ...libTerser,
    lib: {
      entry: entry('src/core/index.ts'),
      name: 'PhoneSelectCore',
      fileName: format => `core.${format}.js`,
      formats: ['es', 'umd']
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        exports: 'named',
        assetFileNames: libAssetFileNames
      }
    },
    copyPublicDir: false,
    assetsDir: 'assets',
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0
  },
  resolve: libResolve,
  assetsInclude: ['**/*.svg'],
  optimizeDeps: {
    exclude: ['fs']
  }
})
