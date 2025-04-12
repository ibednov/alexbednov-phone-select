import { createApp } from 'vue'
import App from '@/demo/App.vue'
import '@/demo/style.css'
import { createI18nInstance } from '@/utils/i18n'

const i18n = createI18nInstance()
const app = createApp(App)
app.use(i18n)
app.mount('#app')
