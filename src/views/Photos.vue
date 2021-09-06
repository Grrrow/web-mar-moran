
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('photos.title') }}</h1>
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
      <masonry :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }" :gutter="10">
          <div
            v-for="(picture, index) in filterPictures"
            :key="index"
            :class="`${changePictures ? 'goingOut' : 'filter_animation'}`"
            @click="show(index)"
          >
            <PhotosCard :picture="picture"/>
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

import PhotosCard from '../components/PhotosCard.vue'
import { picturesCollection } from '../content/firebase'

export default {
  components: { PhotosCard },
  setup() {
    useMeta({
      title: 'Fotos',
      htmlAttrs: { lang: 'en', amp: true },
    })
  },
  data() {
    return {
      imgs: [],
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
      visible: false,
      changePictures: false,
      index: 0,
      picturesList: [],
      filterWord: '',
    }
  },
  async created() {
    const pictures = await picturesCollection.get()
    this.picturesList = pictures.data().picturesList
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
      }, 500);
      setTimeout(() => {
        this.filterWord = newFilter
      }, 500);
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

.filter_animation{
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.goingOut{
  animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-fade-enter-active {
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-fade-leave-active {
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