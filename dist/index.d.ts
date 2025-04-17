import './assets/style.css';
export * from './composables/useCountries';
export * from './utils/translations';
export type { Language } from './interfaces';
import PhoneSelect from './components/PhoneSelect.vue';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator, SelectGroup, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton } from './components/ui/select';
export { PhoneSelect };
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator, SelectGroup, SelectItemText, SelectLabel, SelectScrollDownButton, SelectScrollUpButton };
export default PhoneSelect;
