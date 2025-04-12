declare module 'fs' {
  export function readFileSync(path: string, options?: { encoding?: string }): string
  export function writeFileSync(path: string, data: string, options?: { encoding?: string }): void
}
