
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
import { useMeta } from 'vue-meta'
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
      albums: [
        {
          title: 'Luna Clara',
          cover: 'assets/images/music/lunaclara.jpeg',
          soprano: 'Mar Morán',
          piano: 'Aurelio Viribay',
          spotify: 'https://open.spotify.com/album/0lRQXLzG8iJ8rt6E4PEasU?si=KXJTiDk6Svu78dFlwaVeJQ',
          appleMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          amazonMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          songs: [
            {
              title: 'Luna Clara',
              src: 'luna.mp3',
            },
            {
              title: 'La niña sola',
              src: 'nina.mp3',
            },
            {
              title: 'Malibran',
              src: 'malibran.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          soprano: 'Mar Morán',
          piano: 'Aurelio Viribay',
          spotify: 'https://open.spotify.com/album/0lRQXLzG8iJ8rt6E4PEasU?si=KXJTiDk6Svu78dFlwaVeJQ',
          appleMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          amazonMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          songs: [
            {
              title: 'Luna Clara',
              src: 'luna.mp3',
            },
            {
              title: 'La niña sola',
              src: 'nina.mp3',
            },
            {
              title: 'Malibran',
              src: 'malibran.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          soprano: 'Mar Morán',
          piano: 'Aurelio Viribay',
          spotify: 'https://open.spotify.com/album/0lRQXLzG8iJ8rt6E4PEasU?si=KXJTiDk6Svu78dFlwaVeJQ',
          appleMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          amazonMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          songs: [
            {
              title: 'Luna Clara',
              src: 'luna.mp3',
            },
            {
              title: 'La niña sola',
              src: 'nina.mp3',
            },
            {
              title: 'Malibran',
              src: 'malibran.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          soprano: 'Mar Morán',
          piano: 'Aurelio Viribay',
          spotify: 'https://open.spotify.com/album/0lRQXLzG8iJ8rt6E4PEasU?si=KXJTiDk6Svu78dFlwaVeJQ',
          appleMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          amazonMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          songs: [
            {
              title: 'Luna Clara',
              src: 'luna.mp3',
            },
            {
              title: 'La niña sola',
              src: 'nina.mp3',
            },
            {
              title: 'Malibran',
              src: 'malibran.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          soprano: 'Mar Morán',
          piano: 'Aurelio Viribay',
          spotify: 'https://open.spotify.com/album/0lRQXLzG8iJ8rt6E4PEasU?si=KXJTiDk6Svu78dFlwaVeJQ',
          appleMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          amazonMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          songs: [
            {
              title: 'Luna Clara',
              src: 'luna.mp3',
            },
            {
              title: 'La niña sola',
              src: 'nina.mp3',
            },
            {
              title: 'Malibran',
              src: 'malibran.mp3',
            },
          ]
        },
        {
          title: 'Luna Clara',
          cover: 'src/assets/images/music/lunaclara.jpeg',
          soprano: 'Mar Morán',
          piano: 'Aurelio Viribay',
          spotify: 'https://open.spotify.com/album/0lRQXLzG8iJ8rt6E4PEasU?si=KXJTiDk6Svu78dFlwaVeJQ',
          appleMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          amazonMusic: 'https://music.apple.com/gr/album/luna-clara/1537670626',
          songs: [
            {
              title: 'Luna Clara',
              src: 'luna.mp3',
            },
            {
              title: 'La niña sola',
              src: 'nina.mp3',
            },
            {
              title: 'Malibran',
              src: 'malibran.mp3',
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
  width: 30%;
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
    width: 40%;
    margin: 10px 0;
    padding: 0 15px;
  }
}
@media (max-width: 700px) {
  .main_pictures {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .pictures {
    width: 90%;
    margin: 10px 0;
    padding: 0 15px;
  }
}
</style>