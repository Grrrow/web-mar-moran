
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('videos.title') }}</h1>
      <div class="filters">
        <p
          v-for="(filter, index) in filters"
          :key="index"
          @click="changeFilter(filter.filterWord)"
          :class="{ underline: filter.filterWord === filterWord }"
        >
          {{ filter.text }}
        </p>
      </div>
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
import { videosCollection } from '../content/firebase'

export default {
  setup() {
    useMeta({
      title: 'Videos',
      htmlAttrs: { lang: 'es', amp: true },
    })
  },
  components: { VideosCard, ExtendedVideoCard },
  async created() {
    const videos = await videosCollection.get()
    this.videosList = videos.data().videosList
  },
  data() {
    return {
      showExpanded: false,
      videosList: [],
      videoExpanded: [],
      filters: [
        {
          filterWord: '',
          text: 'Todo',
        },
        {
          filterWord: 'backstage',
          text: 'Backstage',
        },
        {
          filterWord: 'concerts',
          text: 'Conciertos',
        },
        {
          filterWord: 'studio',
          text: 'Estudio',
        },
      ],
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
      return this.videosList.filter((video) =>
        video.filter.includes(this.filterWord)
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
.filters {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 300px;
}
.filters p {
  cursor: pointer;
  position: relative;
}
p:not(.underline):after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(221, 67, 119);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
p:not(.underline):hover:after {
  width: 100%;
  left: 0;
}
.underline {
  border-bottom: rgb(221, 67, 119) 2px solid;
}

.scale-in {
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.scale-out {
  animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
}
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
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
@media (width: 320px) {
  p {
    font-size: 12px;
  }
  .filters {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 200px;
  }
}
</style>