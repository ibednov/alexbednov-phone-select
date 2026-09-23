import { normalizeClass } from 'vue'

export function cn(...inputs: unknown[]) {
  return normalizeClass(inputs)
}
