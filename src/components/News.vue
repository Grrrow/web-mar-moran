<template>
  <div class="news">
    <div class="container">
      <h3>{{ $t('news.title') }}</h3>
      <vueper-slides
        class="no-shadow"
        fixed-height="400px"
        :visible-slides="4"
        slide-multiple
        :bullets = false
        :gap="4"
        :slide-ratio="1 / 3"
        :dragging-distance="200"
        :breakpoints="{ 400: { visibleSlides: 1, slideMultiple: 2 },
        500: { visibleSlides: 2, slideMultiple: 2 },
        900: { visibleSlides: 3, slideMultiple: 2 }  }"
      >
        <vueper-slide v-for="(article, index) in newsList" :key="index">
          <template v-slot:content>
            <NewsCard :article="article" />
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import getNews from '../content/news'

export default {
  components: {VueperSlides, VueperSlide, NewsCard},
  async created() {
    const news =  await getNews()
    this.newsList = news
  },
  data() {
    return{
      newsList: []
    }
  }
}
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
  color: var(--gray-00);
}
@media (max-width: 1330px) {
  .vueperslides--fixed-height.vueperslides--bullets-outside{
  width: 90%;
}
}
</style>