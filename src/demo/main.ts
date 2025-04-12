import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createI18nInstance } from '../utils/i18n'

const app = createApp(App)
app.use(createI18nInstance())
app.mount('#app')
