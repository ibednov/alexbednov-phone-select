import { createApp } from 'vue'
import App from '@/demo/App.vue'
import '@/demo/style.css'
import { setLanguage } from '@/utils/i18n'

const app = createApp(App)
setLanguage('ru')
app.mount('#app')
