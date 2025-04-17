import { createApp } from 'vue'
import App from './App.vue'
import '@/demo/style.css'
import { useTranslate } from '@/composables/useTranslate'

const { setLanguage } = useTranslate()
setLanguage('en')

const app = createApp(App)
app.mount('#app')
