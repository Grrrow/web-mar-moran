import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/GlobalStyles.css'
import './assets/styles/RouterTransitions.css'
import router from './router'
import { createI18n } from 'vue-i18n'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { createMetaManager } from 'vue-meta'

import { messages } from './traductions/locale.js'
import VueEasyLightBox from 'vue-easy-lightbox'
import VCalendar from 'v-calendar'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const i18n = createI18n({
  locale: 'es', // set locale
  messages,
})

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(VueEasyLightBox)
  .use(VCalendar, {})
app
  .use(VueReCaptcha, {
    siteKey: import.meta.env.VITE_APP_CAPTCHATOKEN,
  })
  .use(createMetaManager())
app.mount('#app')
