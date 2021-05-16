
<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} - Yay!</template>
  </metainfo>
  <div>
    <Hero />
    <Biography />
    <News />
    <Events />
    <Contact />
  </div>
</template>

<script setup>
import { useMeta } from 'vue-meta'

import Hero from '../components/Hero.vue'
import Biography from '../components/Biography.vue'
import News from '../components/News.vue'
import Events from '../components/Events.vue'
import Contact from '../components/Contact.vue'
useMeta({
  title: 'Mar Moran - Soprano | Home',
  htmlAttrs: { lang: 'en', amp: true }
})
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