<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Mar Moran - Soprano ` : `Mar Moran - Soprano`
    }}</template>
  </metainfo>
  <Header />
  <main id="page-wrap">
    <transition name="router-anim">
      <router-view />
    </transition>
  </main>
</template>

<script setup>
import { useMeta } from 'vue-meta'

import Header from './components/Header.vue'
useMeta({
  title: 'Mar Moran - Soprano',
  htmlAttrs: { lang: 'en', amp: true },
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
.router-anim-enter-active {
  -webkit-animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.router-anim-leave-active {
  -webkit-animation: fade-out 2s ease-out both;
  animation: fade-out 2s ease-out both;
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>