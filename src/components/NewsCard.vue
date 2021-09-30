<template>
  <div class="padding_20">
    <a :href="article.link">
      <img v-lazy="article.imageUrl" alt="" />
      <p v-text="article.title"></p>
    </a>
    <div class="source" v-if="article.iconUrl">
      <img v-lazy="article.iconUrl" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['article']
};
</script>
<style scoped>
.padding_20 {
  padding: 20px;
  line-height: 25.6px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
}
p {
  font-size: 16px;
  font-style: italic;
  font-family: Lato, sans-serif;
  color: rgb(221, 67, 119);
  text-align: left;
  line-height: 20px;
  font-weight: 300;
}
p:hover {
  color: #10316d;
  text-decoration: none;
  transition: all 0.2s linear 0s;
}
img {
  transition: all 0.2s ease-in-out 0s;
}
img:hover {
  opacity: 0.8;
}
.padding_20 * {
  width: 100%;
}
.source * {
  width: 55%;
  float: left;
}
</style>