import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'
import ru from '../lang/ru.json'
import en from '../lang/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    ru,
    en
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
