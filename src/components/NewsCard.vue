<template>
  <div>
    <vueper-slides
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 3"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <vueper-slide v-for="i in news" :key="i">
        <template v-slot:content>
          <div class="cards">
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
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
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
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "MOMO",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba1",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba2",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba3",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba4",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba5",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba6",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba7",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
        {
          img:
            "https://marmoransoprano.es/wp-content/uploads/2021/01/A9_05039-scaled-300x200.jpg",
          text: "Prueba8",
          source:
            "https://marmoransoprano.es/wp-content/uploads/2021/02/radionacionalclasica-e1612390880165.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
.main_news {
  display: flex;
  align-content: space-between;
}
.cards {
  width: 100%;
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