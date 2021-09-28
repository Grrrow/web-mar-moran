
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('videos.title') }}</h1>
      <Filters :filterWord="filterWord" @setFilter="changeFilter" />
      <div class="main_videos">
        <div
          v-for="(video, index) in filterVideos"
          :key="index"
          :class="`videos ${changeVideos ? 'scale-out' : 'scale-in'}`"
        >
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

import VideosCard from '../components/VideosCard.vue'
import ExtendedVideoCard from '../components/ExtendedVideoCard.vue'
import Filters from '../components/Filters.vue'
import getVideos from '../content/getVideos'

export default {
  setup() {
    useMeta({
      title: 'Videos',
      htmlAttrs: { lang: 'es', amp: true },
    })
  },
  components: { VideosCard, ExtendedVideoCard, Filters },
  async created() {
    const videos = await getVideos()
    this.videosList = videos
    console.log(videos)
  },
  data() {
    return {
      showExpanded: false,
      videosList: [],
      videoExpanded: [],
      changeVideos: false,
      filterWord: '',
    }
  },
  methods: {
    expand(video) {
      this.videoExpanded = video
      this.showExpanded = true
    },
    changeFilter(newFilter) {
      setTimeout(() => {
        this.changeVideos = false
      }, 500)
      setTimeout(() => {
        this.filterWord = newFilter
      }, 500)
      this.changeVideos = true
    },
  },
  computed: {
    filterVideos() {
      console.log(this.videosList)
      return this.videosList.filter((video) => {
          return !this.filterWord === 'todo'?
          video.filter.includes(this.filterWord) :
          video
      }
      )
    },
  },
}
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

@media (max-width: 800px) {
  .main_videos {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .videos {
    width: 100%;
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
}
</style>