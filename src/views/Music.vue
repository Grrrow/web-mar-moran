
<template>
  <div class="main">
    <div class="container">
      <h1>Música</h1>
      <div class="main_pictures">
        <div
          v-for="(album, index) in albums"
          :key="index"
          class="pictures"
        >
          <AlbumsCard :album="album" :id="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumsCard from "../components/AlbumsCard.vue";
export default {
  components: { AlbumsCard },
  data() {
    return {
      albums: [
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          songs: [
            {
              title: 'It´s my Life',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test.mp3',
            },
            {
              title: 'You Give Love a Bad Name',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test2.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          songs: [
            {
              title: 'It´s my Life',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test.mp3',
            },
            {
              title: 'You Give Love a Bad Name',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test2.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          songs: [
            {
              title: 'It´s my Life',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test.mp3',
            },
            {
              title: 'You Give Love a Bad Name',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test2.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          songs: [
            {
              title: 'It´s my Life',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test.mp3',
            },
            {
              title: 'You Give Love a Bad Name',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test2.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          songs: [
            {
              title: 'It´s my Life',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test.mp3',
            },
            {
              title: 'You Give Love a Bad Name',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test2.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          songs: [
            {
              title: 'It´s my Life',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test.mp3',
            },
            {
              title: 'You Give Love a Bad Name',
              author: 'Jesús el músicas',
              piano: 'Aurelio el pianista',
              src: 'test2.mp3',
            },
          ]
        },
      ],
    };
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
.main_pictures {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pictures {
  width: 330px;
  margin: 10px 0;
  padding: 0 15px;
}
@media (max-width: 1300px) {
  .main_pictures {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .pictures {
    width: 330px;
    margin: 10px 0;
    padding: 0 15px;
  }
}
</style>