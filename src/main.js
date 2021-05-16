import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/GlobalStyles.css'
import router from './router'
import { createI18n } from 'vue-i18n'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { createMetaManager } from 'vue-meta'

import {messages}  from './traductions/locale.js'
import VueEasyLightBox from "vue-easy-lightbox";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const i18n = createI18n({
    locale: 'es', // set locale
    messages, 
})

const app = createApp(App);
app.use(i18n)
app.use(VueEasyLightBox)
//app.use(VueReCaptcha, { 
//    siteKey: '<key>'})
.use(createMetaManager()) // add this line
app.use(router).mount('#app')
