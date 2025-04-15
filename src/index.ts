// Styles
import './assets/style.css'

// API
export * from './composables/useCountries'
export * from './utils/translations'
export type { Language } from './interfaces'

// Components
import PhoneSelect from './components/PhoneSelect.vue'

export { PhoneSelect }
export default PhoneSelect
