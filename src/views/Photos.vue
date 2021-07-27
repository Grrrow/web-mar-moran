
<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('photos.title') }}</h1>
      <div class="main_pictures">
        <div
          v-for="(picture, index) in picturesList"
          :key="index"
          @click="show(index)"
          class="pictures"
        >
          <PhotosCard :picture="picture" />
        </div>
      </div>
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

import PhotosCard from "../components/PhotosCard.vue";
import { picturesCollection } from '../content/firebase'

export default {
  components: { PhotosCard },
  setup(){
    useMeta({
      title: 'Fotos',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  mounted() {

  },
  data() {
    return {
      imgs: [],
      visible: false,
      index: 0,
      picturesList: [],
    };
  },
  async created() {
    const pictures =  await picturesCollection.get()
    this.picturesList = pictures.data().picturesList
    console.log(this.picturesList)
    this.picturesList.map((picture) => {
      this.imgs.push(picture.imageUrl);
    });
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
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
    width: 100%;
    margin: 10px 0;
    padding: 0 15px;
  }
}
</style>