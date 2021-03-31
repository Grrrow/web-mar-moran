<template>
  <div class="slider">
    <div class="image">
      <span class="arrow-left" @click="state.counter--">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M10 16L20 6l1.4 1.4-8.6 8.6 8.6 8.6L20 26z" />
          <path fill="none" d="M0 0h32v32H0z" />
        </svg>
      </span>
      <img :src="sliderContent[state.counter].url" alt="" />
      <div :class="`text ${sliderContent[state.counter].text.position}`">
        <h1>{{ sliderContent[state.counter].text.title }}</h1>
        <p class="description">{{ sliderContent[state.counter].text.description }}</p>
      </div>
      <span class="arrow-right" @click="state.counter++">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M22 16L12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z" />
          <path fill="none" d="M0 0h32v32H0z" />
        </svg>
      </span>
      
    </div>
  </div>
</template>
<script setup>
import { defineProps, reactive } from "vue";
import { sliderContent } from "../content/slider-content.js";
const state = reactive({ counter: 0 });
</script>
<style scoped>
.slider {
  height: (100vh - 64px);
  background: var(--gray-00);
  position: relative;
}
.arrow-left svg, .arrow-right svg {
  width: 32px;
  height: 32px;
  fill: #fff;
}
.image {
  height: 100%;
  width: 100%;
  transition: 1s;
  position: relative;
}
.image img {
  width: 100%;
}
.placeholder {
  display: flex;
  height: 100%;
  background: red;
  align-items: center;
  justify-content: center;
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
.arrow-left,
.arrow-right {
  position: absolute;
  background: rgba(255, 255, 255, 0.027);
  z-index: 1;
  top: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.arrow-left {
  left: 0;
}
.arrow-right {
  right: 0;
}
.arrow-left:hover,
.arrow-right:hover{
  background: rgba(255, 255, 255, 0.267);
} 
</style>
