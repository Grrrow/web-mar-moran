<template>
  <div class="news">
    <div class="container">
      <h3>{{ $t('news.title') }}</h3>
      <NewsCard />
    </div>
  </div>
</template>

<script setup>
import NewsCard from './NewsCard.vue'

</script>

<style scoped>
.news{
    height: 640px;
    width: 100%;
    background-color: var(--white-00);
}
.container{
    max-width: var(--app-max-width);
    height: 100%;
    margin: 0 auto;
    padding: 2rem;

    
}
h3{
    text-align: left;
    font-size: var(--font-03);
}
</style>