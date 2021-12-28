
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('music.title') }}</h1>
      <div class="main_albums">
        <div
          v-for="(album, index) in albumsList"
          :key="index"
          class="albums"
        >
          <AlbumsCard :album="album" :id="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumsCard from "../components/AlbumsCard.vue";
import { useMeta } from 'vue-meta'
import getMusic from '../content/getMusic'

export default {
  setup(){
    useMeta({
      title: 'Musica',
      htmlAttrs: { lang: 'es', amp: true }
    })
  },
  components: { AlbumsCard },
  data() {
    return {
      albumsList: [],
    };
  },
  async mounted() {
    this.albumsList =  await getMusic()
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
.header {
  padding: 0 35px;
  text-align: left;
}
.main_albums {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.albums {
  width: 30%;
  margin: 10px 0;
  padding: 0 15px;
}
@media (max-width: 1300px) {
  .main_albums {
    flex-direction: column;
    align-items: center;
  }
  .albums {
    width: 40%;
    padding: 0 15px;
  }
}
@media (max-width: 700px) {
  .main_albums {
    flex-direction: column;
    align-items: center;
  }
  .albums {
    width: 90%;
    padding: 0 15px;
  }
}
</style>