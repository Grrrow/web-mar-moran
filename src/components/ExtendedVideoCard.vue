<template>
  <div class="main">
    <iframe :src="video.youtubeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="content">
      <h4>{{video.title}}</h4>
      <p>{{video.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['video'],
};
</script>
<style scoped>
.main {
  background-color: #292929;
  display: flex;
  flex-direction: column;
}
iframe{
  width: 100%;
  height: 500px;
  background-color: #292929;
}
.content {
  padding: 25px 15px;
  background-color: #292929;
}
p{
  color: #B2B2B2;
  text-align: left;
}
h4{
  color: white;
}
button{
  padding: 10px 35px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>