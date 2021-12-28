<template>
  <div class="slider">
    <vueper-slides
      class="no-shadow"
      lazy
      :autoplay="sliderList.length > 0"
      :bullets= false
      :slide-ratio="1 / 1.5"
      :dragging-distance="200"
    >
      <vueper-slide
        v-for="(slider, index) in sliderList"
        :duration= 5000
        lazy-load-on-drag
        lazy
        :key="index"
      >
        <template v-slot:content>
          <div>
            <img style="width: 100%" v-lazy="slider.url"/>
            <div
              :class="`text ${slider.position} ${slider.colorText}`"
            >
              <h1>{{ slider.title }}</h1>
              <p class="description">{{ slider.description }}</p>
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
import getHeroContent from '../content/slider-content'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      sliderList: [],
    }
  },
  async created() {
    this.sliderList = await getHeroContent();
    this.$nextTick(() => this.observe())
  },
  methods: {
    observe() {
      const elements = document.querySelectorAll('.text')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.remove('animation')
            if (entry.isIntersecting)
              setTimeout(() => {
                entry.target.classList.add('animation')
              }, 200)
          })
        },
        {
          root: null,
          threshold: 1.0,
        }
      )
      elements.forEach((slide) => {
        observer.observe(slide)
      })
    },
  },
}
</script>
<style scoped>
.nonVisible {
  opacity: 0;
}
.animation {
  -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.slider {
  height: (100vh - 64px);
  background: var(--gray-00);
  position: relative;
}
.dark {
  color: black;
}
.light {
  color: var(--white-00);
}
.text {
  position: absolute;
  bottom: 0;
  padding: 0 10px;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.1);
  color: var(--white-00);
  font-size: 16px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.description {
  max-width: 500px;
  text-align: center;
}
.text h1{
  margin: 1rem 5px 5px 5px;
}
@media (max-width: 600px) {
  .text {
    font-size: 12px;
  }
  .description{
    max-width: 90%;
  }
  .text h1{
    margin: 5px 0 0 0;
  }
}
</style>
