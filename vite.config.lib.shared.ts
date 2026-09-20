import { resolve } from 'path'
import { fileURLToPath } from 'url'
import path from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const libRoot = __dirname

export const libResolve = {
  alias: {
    '@': path.resolve(__dirname, './src')
  }
}

export const libTerser = {
  minify: 'terser' as const,
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  }
}

export const libAssetFileNames = (assetInfo: { name?: string }) => {
  if (assetInfo.name?.endsWith('.svg')) {
    return 'assets/flags/[name][extname]'
  }
  if (assetInfo.name?.endsWith('.css')) {
    return 'assets/style.css'
  }
  return 'assets/[name][extname]'
}

export const entry = (segment: string) => resolve(libRoot, segment)
