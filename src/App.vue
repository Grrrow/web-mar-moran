}
<template>
  <Header/>
  <Hero />
  <Biography />
  <News />
</template>

<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Biography from './components/Biography.vue'
import News from './components/News.vue'

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