import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/GlobalStyles.css'
import { createI18n } from 'vue-i18n'
import {messages}  from './traductions/locale.js'
const i18n = createI18n({
    locale: 'es', // set locale
    messages, 
})

const app = createApp(App);
app.use(i18n)
app.mount('#app')
