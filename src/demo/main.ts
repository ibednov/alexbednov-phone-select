import { createApp } from 'vue'
import App from './App.vue'
import '@/demo/style.css'
import { useI18n } from '@/composables/useI18n'

const { setLanguage } = useI18n()
setLanguage('en')

const app = createApp(App)
app.mount('#app')
