
<template>
  <div class="main">
    <div class="container">
      <div class="header">
        <h1>Noticias</h1>
        <input v-model="inputSearch" type="text" placeholder="Buscar noticia" />
      </div>
      <div class="main_news">
        <div v-for="i in filterNews" :key="i.code" class="cards">
          <div class="padding_20">
            <a :href="i.url">
              <img :src="i.img" alt="" />
              <p v-text="i.text"></p>
            </a>
            <div class="source" v-if="i.source">
              <img :src="i.source" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from "../components/News.vue";
export default {
  data() {
    return {
      inputSearch: '',
      news: [
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text:
            "Necesario García Leoz - La crítica de Pablo Siena sobre Luna Clara",
          source:
            "",

          url:
            "https://pablosiana.wordpress.com/2021/02/03/necesario-jesus-garcia-leoz",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/portada-DEFINITIVA-copia-scaled-300x200.jpg",
          text:
            "Luna Clara, un tributo a García Leoz - Entrevista en la dársena.",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
          url:
            "https://www.rtve.es/m/alacarta/audios/la-darsena/entrevista-mar-moran/5774376/?media=rne&fbclid=IwAR2WwiPsvd7CmmCA3O_glevOeLwRT0jchY3E4e1gXXTF3njrd67geJyzO7E",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2020/11/Mar-Moran-recibe-el-premio-Lola-Rodriguez-300x200.jpg",
          text:
            "La soprano Mar Morán recibe el Premio Lola Rodríguez de Aragón",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2020/11/tlm-e1606596824835.jpeg",
          url:
            "http://todalamusica.es/la-sopreno-mar-moran-recibe-el-premio-lola-rodriguez-de-aragon/",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/IMG_9615-2-scaled-300x200.jpg",
          text:
            "LA SOPRANO MAR MORÁN, PREMIO LOLA RODRÍGUEZ DE ARAGÓN 2020, DE LA ESCUELA SUPERIOR DE CANTO DE MADRID",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2020/07/LogoPlateaNuevoCompleto-e1595799158681.png",
          url:
            "https://www.plateamagazine.com/noticias/10173-la-soprano-mar-moran-premio-lola-rodriguez-de-aragon-2020-de-la-escuela-superior-de-canto-de-madrid",
        },
      ],
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
.cards {
  width: 30%;
  margin: 10px 0;
  padding: 0 15px;
}
.padding_20 {
  padding: 20px;
  line-height: 25.6px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
}
p {
  font-size: 16px;
  font-style: italic;
  font-family: Lato, sans-serif;
  color: rgb(221, 67, 119);
  text-align: left;
  line-height: 20px;
  font-weight: 300;
}
p:hover {
  color: #10316d;
  text-decoration: none;
  transition: all 0.2s linear 0s;
}
img {
  transition: all 0.2s ease-in-out 0s;
}
img:hover {
  opacity: 0.8;
}
.padding_20 * {
  width: 100%;
}
.source * {
  width: 55%;
  float: left;
}
</style>