<template>
  <Header/>
  <main id="page-wrap">
    <router-view />
  </main>
</template>

<script setup>
import Header from './components/Header.vue'

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