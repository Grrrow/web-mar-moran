
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t("videos.title") }}</h1>
      <div class="main_videos">
        <div v-for="(video, index) in videos" :key="index" class="videos">
          <VideosCard :video="video" v-on:close="expand(video)" />
        </div>
      </div>
    </div>
    <div class="darkdiv" v-if="showExpanded" @click="showExpanded = false">
      <div class="expanded_div">
        <ExtendedVideoCard :video="videoExpanded" />
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import VideosCard from "../components/VideosCard.vue";
import ExtendedVideoCard from "../components/ExtendedVideoCard.vue";
export default {
  setup(){
    useMeta({
      title: 'Videos',
      htmlAttrs: { lang: 'es', amp: true }
    })
  },
  components: { VideosCard, ExtendedVideoCard },
  data() {
    return {
      showExpanded: false,
      videos: [
        {
          src: "https://www.youtube.com/embed/O2qPE_-Wto8",
          title: "Making-of «Luna Clara»",
          description:
            "En este video se muestra el como se hizo el CD «Luna Clara» con el sello discografico «Odradek records» en su estudio «The Spheres» en Montesilvano, Pescara, Italia. Mar Morán, Soprano. Aurelio Viribay, Pianista.(https://www.youtube.com/channel/UCNkG…). Marcello MalavideoExpandeda, Ingeniero de sonido. (c) Tommaso Tuzj – Odradek Records, Imagen. Clizia Tonelli, Maquillaje. Jenny Cirulli, Peluquería.",
        },
        {
          src: "https://www.youtube.com/embed/O2qPE_-Wto8",
          title: "Making-of «Luna Clara»",
          description:
            "En este video se muestra el como se hizo el CD «Luna Clara» con el sello discografico «Odradek records» en su estudio «The...",
        },
        {
          src: "https://www.youtube.com/embed/O2qPE_-Wto8",
          title: "Making-of «Luna Clara»",
          description:
            "En este video se muestra el como se hizo el CD «Luna Clara» con el sello discografico «Odradek records» en su estudio «The...",
        },
        {
          src: "https://www.youtube.com/embed/O2qPE_-Wto8",
          title: "Making-of «Luna Clara»",
          description:
            "En este video se muestra el como se hizo el CD «Luna Clara» con el sello discografico «Odradek records» en su estudio «The...",
        },
        {
          src: "https://www.youtube.com/embed/O2qPE_-Wto8",
          title: "Making-of «Luna Clara»",
          description:
            "En este video se muestra el como se hizo el CD «Luna Clara» con el sello discografico «Odradek records» en su estudio «The...",
        },
        {
          src: "https://www.youtube.com/embed/O2qPE_-Wto8",
          title: "Making-of «Luna Clara»",
          description:
            "En este video se muestra el como se hizo el CD «Luna Clara» con el sello discografico «Odradek records» en su estudio «The...",
        },
      ],
      videoExpanded: [],
    };
  },
  methods: {
    expand(video) {
      this.videoExpanded = video;
      this.showExpanded = true;
    },
  },
};
</script>

<style scoped>
.main {
  background-color: white;
}
.container {
  max-width: var(--app-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
}
h1 {
  padding: 0 35px;
  text-align: left;
}
.main_videos {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.videos {
  width: 30%;
  margin: 10px 0;
  padding: 0 15px;
}
.darkdiv {
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
}
.expanded_div {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0;
  position: absolute;
  top: 10%;
  left: 15%;
  -webkit-transform: translate(-50% -50%);
  transform: translate(-50% -50%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  will-change: transform opacity;
  width: 70%;
}
@media (max-width: 1300px) {
  .main_videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .videos {
    width: 400px;
    margin: 10px 0;
    padding: 0 15px;
  }
}
</style>