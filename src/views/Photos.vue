
<template>
  <div class="main">
    <div class="container">
      <h1>Fotos</h1>
      <div class="main_pictures">
        <div
          v-for="(picture, index) in pictures"
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
export default {
  components: { PhotosCard },
  setup(){
    useMeta({
      title: 'Fotos',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  mounted() {
    this.pictures.map((picture) => {
      this.imgs.push(picture.picture);
    });
    console.log(process.env.VUE_APP_EXAMPLE)
  },
  data() {
    return {
      imgs: [],
      visible: false,
      index: 0,
      pictures: [
        {
          picture:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/IMG_6759-1170x780.jpg",
          text: "Concert at the Juan March Foundation – Madrid",
        },
        {
          picture:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/9CA1551A-EE1E-456E-BCCF-2557684F7C33-775x517.jpg",
          text: "Concert at the Juan March Foundation – Madrid",
        },
        {
          picture:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/IMG_6759-1170x780.jpg",
          text: "Concert at the Juan March Foundation – Madrid",
        },
        {
          picture:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/IMG_6759-1170x780.jpg",
          text: "Concert at the Juan March Foundation – Madrid",
        },
        {
          picture:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/IMG_6759-1170x780.jpg",
          text: "Concert at the Juan March Foundation – Madrid",
        },
        {
          picture:
            "https://marmoransoprano.es/wp-content/uploads/2017/11/IMG_6759-1170x780.jpg",
          text: "Concert at the Juan March Foundation – Madrid",
        },
      ],
    };
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
  width: 370px;
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

    width: 420px;
    margin: 10px 0;
    padding: 0 15px;
  }
}
</style>