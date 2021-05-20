<template>
  <div class="slider">
    <vueper-slides
      class="no-shadow"
      autoplay 
      :visible-slides="1"
      slide-multiple
      :gap="1"
      :slide-ratio="1/1.5"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 1 } }"
    >
    <vueper-slide v-for="slider in sliderList" :key="slider.id" :image="slider.url">
      <template v-slot:content>
        <div>
          <div :class="`text ${slider.position}`">
            <h1>{{ slider.title }}</h1>
            <p class="description">{{ slider.Description }}</p>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import  sliderContent  from "../content/slider-content.js";
export default {
  components: {VueperSlides, VueperSlide},
  data() {
    return{
      sliderList: []
    }
  },
  async mounted() {
    this.sliderList = await sliderContent()
  }

}

</script>
<style scoped>
.slider {
  height: (100vh - 64px);
  background: var(--gray-00);
  position: relative;
}

.text {
  position: absolute;
  top: 40%;
  color: var(--white-00);
}
.text.left {
  left: 6rem;
  text-align: left;
}
.text.right {
  right: 6rem;
  text-align: right;
}
.description{
  max-width: 500px;
}
</style>
