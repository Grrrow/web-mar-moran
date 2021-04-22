<template>
  <div class="slider">
    <vueper-slides
      class="no-shadow"
      autoplay
      :visible-slides="1"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 2"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    >
    <vueper-slide v-for="i in sliderContent" :key="i" :image="i.url">
      <template v-slot:content>
        <div>
          <div :class="`text ${i.text.position}`">
            <h1>{{ i.text.title }}</h1>
            <p class="description">{{ i.text.description }}</p>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
  </div>
</template>
<script setup>
import { defineProps, reactive } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { sliderContent } from "../content/slider-content.js";

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
