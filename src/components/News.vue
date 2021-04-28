<template>
  <div class="news">
    <div class="container">
      <h3>Noticias</h3>
      <vueper-slides
        class="no-shadow"
        :visible-slides="4"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 3"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide v-for="(article, index) in news" :key="index">
          <template v-slot:content>
            <NewsCard :article="article" />
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script setup>
import NewsCard from "./NewsCard.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { news } from "../content/news.js";
</script>

<style scoped>
.news {
  height: 640px;
  width: 100%;
  background-color: var(--white-00);
}
.container {
  max-width: var(--app-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
}
h3 {
  text-align: left;
  font-size: var(--font-03);
}
</style>