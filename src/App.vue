<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `Mar Moran - Soprano | ${content}` : `Mar Moran - Soprano` }}</template>
  </metainfo>
  <Header/>
  <main id="page-wrap">
    <router-view />
  </main>
</template>

<script setup>
import { useMeta } from 'vue-meta'

import Header from './components/Header.vue'
  console.log("HOla", import.meta.env.VITE_APP_EXAMPLE)
  useMeta({
    title: 'Mar Moran - Soprano',
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