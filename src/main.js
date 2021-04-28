import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/GlobalStyles.css'
import router from './router'
import { createI18n } from 'vue-i18n'
import {messages}  from './traductions/locale.js'
import VueEasyLightBox from "vue-easy-lightbox";
const i18n = createI18n({
    locale: 'es', // set locale
    messages, 
})

const app = createApp(App);
app.use(i18n)
app.use(VueEasyLightBox)
app.use(router).mount('#app')
