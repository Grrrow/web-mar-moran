import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/GlobalStyles.css'
import './assets/styles/Transitions.css'
import router from './router'
import { createI18n } from 'vue-i18n'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { createMetaManager } from 'vue-meta'

import { messages } from './traductions/locale.js'
import VueEasyLightBox from 'vue-easy-lightbox'
import VueLazyload from '@jambonn/vue-lazyload'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import masonry from 'vue-next-masonry'

const i18n = createI18n({
  locale: 'es', // set locale
  messages,
})

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(VueEasyLightBox)
  .use(masonry)
  .use(VueLazyload)
  .use(createMetaManager())
/*  .use(VueReCaptcha, {
    siteKey: import.meta.env.VITE_APP_CAPTCHATOKEN,
  })*/
app.mount('#app')
