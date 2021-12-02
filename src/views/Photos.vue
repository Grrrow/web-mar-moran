
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('photos.title') }}</h1>
      <Filters :filterWord="filterWord" @setFilter="changeFilter" />
      <masonry :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }" :gutter="10">
        <div
          v-for="(picture, index) in filterPictures"
          :key="index"
          :class="`${changePictures ? 'scale-out' : 'scale-in'}`"
          @click="show(index)"
        >
          <PhotosCard :picture="picture" />
        </div>
      </masonry>
    </div>
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    >
    </vue-easy-lightbox>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import Filters from '../components/Filters.vue'
import PhotosCard from '../components/PhotosCard.vue'
import getPictures from '../content/getPictures'

export default {
  components: { PhotosCard, Filters },
  setup() {
    useMeta({
      title: 'Fotos',
      htmlAttrs: { lang: 'en', amp: true },
    })
  },
  data() {
    return {
      imgs: [],
      visible: false,
      changePictures: false,
      index: 0,
      picturesList: [],
      filterWord: '',
    }
  },
  async created() {
    this.picturesList = await getPictures()
    this.picturesList.map((picture) => {
      this.imgs.push(picture.imageUrl)
    })
  },
  methods: {
    show(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    changeFilter(newFilter) {
      this.imgs = []
      setTimeout(() => {
        this.changePictures = false
      }, 700)
      setTimeout(() => {
        this.filterWord = newFilter
      }, 700)
      this.picturesList.map((picture) => {
        if (picture.filter === newFilter) this.imgs.push(picture.imageUrl)
      })
      this.changePictures = true
    },
  },
  computed: {
    filterPictures() {
      return this.picturesList.filter((picture) =>
        picture.filter.includes(this.filterWord)
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
</style>