// Styles
import './assets/style.css'

// API
export * from './composables/useCountries'
export * from './utils/translations'
export type { Language } from './interfaces'

// Components
import PhoneSelect from './components/PhoneSelect.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from './components/ui/select'

export { PhoneSelect }
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator }
export default PhoneSelect
