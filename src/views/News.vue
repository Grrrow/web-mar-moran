
<template>
  <div class="main">
    <div class="container">
      <div class="header">
        <h1>Noticias</h1>
        <input v-model="inputSearch" type="text" placeholder="Buscar noticia" />
      </div>
      <div class="main_news">
        <div v-for="(article, index) in filterNews" :key="index" class="cards">
          <NewsCard :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue"
import { news } from "../content/news.js";
export default {
  components: {NewsCard},
  data() {
    return {
      inputSearch: '',
      news: news
    };
  },
  computed: {
    filterNews(){
      return this.news.filter((article) => 
        article.text.toUpperCase().includes(this.inputSearch.toUpperCase())
      );
    },
  }
};
</script>

<style scoped>

.cards {
  width: 30%;
  margin: 10px 0;
  padding: 0 15px;
}
input {
  width: 40%;
  border: gray 1px solid;
  border-radius: 6px;
  padding: 8px;
  font-size: 16px;
}
.main {
  background-color: white;
}
.container {
  max-width: var(--app-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
}
.header {
  padding: 0 35px;
  text-align: left;
}
.main_news {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>