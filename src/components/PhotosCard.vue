<template>
  <div>
    <div class="padding_20">
      <img :src="picture.imageUrl" alt="" style="width: 100%" />
      <div class="plus">
        <a href="#">+</a>
      </div>
      <div class="centered">{{ picture.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['picture'],
};
</script>
<style scoped>
.padding_20 {
  padding: 20px;
  position: relative;
  text-align: center;
  color: white;
}
.plus {
  width: 60%;
  font-size: 30px;
  opacity: 0;
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centered {
  width: 60%;
  opacity: 0;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.padding_20:hover > .centered {
  opacity: 10;
  transition: all 1s;
}
.padding_20:hover > .plus {
  opacity: 10;
  transition: all 1s;
}
.padding_20:hover > img {
  filter: brightness(50%);
  transition: all 1s;
}
</style>