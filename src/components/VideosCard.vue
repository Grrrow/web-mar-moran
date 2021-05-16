<template>
  <div class="main">
    <iframe
      :src="video.src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="content">
      <h4>{{ video.title }}</h4>
      <p>{{ video.description }}</p>
      <button @click="expandCard()">Leer más</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["video"],
  methods: {
    expandCard() {
      this.$emit("close", this.video);
    },
  },
};
</script>
<style scoped>
.main {
  
  display: flex;
  flex-direction: column;
}
iframe {
  width: 100%;
  height: 200px;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius:var(--border-radius);
}
.content {
  padding: 15px;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  background-color: #292929;
}
p {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6rem;
  color: #b2b2b2;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
h4 {
  color: white;
  font-family: "Changa", sans-serif;
  font-weight: 400;
  font-size: 24px;
}
button {
  padding: 10px 35px;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
}
button:hover {
  background-color: #dd4377;
  color: white;
  transition: 0.7s;
}
</style>