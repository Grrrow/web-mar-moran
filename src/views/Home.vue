
<template>
  <div>
    <Hero />
    <Biography />
    <News />
    <Events />
    <Contact />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import Hero from '../components/Hero.vue'
import Biography from '../components/Biography.vue'
import News from '../components/News.vue'
import Events from '../components/Events.vue'
import Contact from '../components/Contact.vue'

export default {
  setup(){
    useMeta({
      title: 'Home',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  components: {
    Hero,
    Biography,
    News,
    Events,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>