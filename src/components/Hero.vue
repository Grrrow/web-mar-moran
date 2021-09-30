<template>
  <div class="slider">
    <vueper-slides
      class="no-shadow"
      :autoplay="sliderList.length > 0"
      :visible-slides="1"
      slide-multiple
      :gap="1"
      :slide-ratio="1 / 1.5"
      :dragging-distance="200"
      :breakpoints="{ 800: { visibleSlides: 1 } }"
    >
      <vueper-slide
        v-for="(slider, index) in sliderList"
        lazy-load-on-drag
        lazy
        :key="index"
      >
        <template v-slot:content>
          <div>
            <img style="width: 100%" v-lazy="slider.url"/>
            <div
              :class="`nonVisible text ${slider.position} ${slider.colorText}`"
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
  padding: 10px;
  top: 40%;
  font-size: 24px;
}

.text.left {
  left: 16rem;
  text-align: left;
}
.text.right {
  right: 16rem;
  text-align: right;
}
.description {
  max-width: 500px;
}
@media (max-width: 1500px) {
  .text {
    position: absolute;
    top: 40%;
    font-size: 24px;
  }
  .text.left {
    left: 12rem;
    text-align: left;
  }
  .text.right {
    right: 12rem;
    text-align: right;
  }
}
@media (max-width: 1024px) {
  p {
    width: 450px;
  }
  .text {
    position: absolute;
    top: 25%;
    font-size: 20px;
  }
  .text.left {
    left: 4rem;
    text-align: left;
  }
  .text.right {
    right: 4rem;
    text-align: right;
    color: var(--white-00);
  }
}
@media (max-width: 900px) {
  .text {
    position: absolute;
    top: 30%;
    font-size: 16px;
  }
  .text.left {
    left: 4rem;
    text-align: left;
  }
  .text.right {
    top: 35%;
    right: 4rem;
    text-align: right;
    color: var(--white-00);
  }

  .description {
    max-width: 300px;
  }
}
@media (max-width: 550px) {
  .text {
    background: rgba(0, 0, 0, 0.4);
    border-radius: var(--border-radius);
    color: var(--white-00);
    position: absolute;
    top: 10%;
    font-size: 10px;
  }
  .text.left {
    left: 4rem;
    text-align: left;
  }
  .text.right {
    top: 10%;
    right: 4rem;
    text-align: right;
  }

  .description {
    max-width: 200px;
  }
}
@media (max-width: 420px) {
  .text {
    font-weight: 600;
  }
  .text.left {
    top: 18%;
    font-size: 8px;
    left: 4rem;
    text-align: left;
  }
  .text.right {
    top: 25%;
    font-size: 8px;
    right: 4rem;
    text-align: right;
  }
}
@media (max-width: 375px) {
  .text {
    font-weight: 600;
  }
  .text.left {
    top: 10%;
    font-size: 10px;
    left: 4rem;
    text-align: left;
  }
  .text.right {
    top: 20%;
    font-size: 8px;
    right: 4rem;
    text-align: right;
  }
}
@media (max-width: 360px) {
  .text {
    font-weight: 600;
  }
  .text.left {
    top: 25%;
    font-size: 8px;
    left: 4rem;
    text-align: left;
  }
  .text.right {
    top: 20%;
    font-size: 8px;
    right: 4rem;
    text-align: right;
  }
}
@media (max-width: 320px) {
  .text {
    font-weight: 600;
  }
  .text.left {
    top: 18%;
    font-size: 8px;
    left: 3rem;
    text-align: left;
  }
  .text.right {
    top: 20%;
    font-size: 8px;
    right: 3rem;
    text-align: right;
  }
}
</style>
