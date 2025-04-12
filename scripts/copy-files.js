import { cp } from 'node:fs/promises'
import { join } from 'node:path'

const copyFiles = async () => {
  const srcDir = join(process.cwd(), 'src')
  const distDir = join(process.cwd(), 'dist')

  // Копируем флаги
  await cp(
    join(srcDir, 'assets', 'flags'),
    join(distDir, 'assets', 'flags'),
    { recursive: true }
  )

  // Копируем переводы
  await cp(
    join(srcDir, 'lang'),
    join(distDir, 'lang'),
    { recursive: true }
  )
}

copyFiles().catch(console.error)
