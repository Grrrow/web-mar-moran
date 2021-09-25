<template>
  <div>
    <div @click="emitShareEvent(show)" class="shareButton">
      <ShareIcon color="white" width="20" />
    </div>
    <img :src="show.poster" />
    <p>
      {{ show.date.toDate().toLocaleDateString('es-ES', dateOptions) }}
    </p>
    <p>{{ show.location }}</p>
    <div :id="`role${index}`" class="noDisplay">
      <p>
        {{ show.role }}
      </p>
      <p>
        {{ show.role }}
      </p>
      <p>
        {{ show.role }}
      </p>
    </div>
    <div class="buttonsContainer">
      <button @click="collapse()">
        <strong :id="`icon${index}`"> + </strong>
      </button>
      <a :href="show.link">Comprar</a>
    </div>
  </div>
</template>

<script>
import ShareIcon from './ShareIcon.vue'
export default {
  props: ['show', 'index'],
  components: { ShareIcon },
  data() {
    return {
      dateOptions: {
        month: 'long',
        day: 'numeric',
      },
    }
  },
  methods: {
    emitShareEvent(show) {
      this.$emit('share', show)
    },
    collapse() {
      const element = document.getElementById('role' + this.index)
      const icon = document.getElementById('icon' + this.index)
      if (element.classList.contains('display')) {
        element.classList.remove('display')
        element.classList.add('noDisplay')
        icon.innerHTML = '+'
      } else {
        element.classList.remove('noDisplay')
        element.classList.add('display')
        icon.innerHTML = '-'
      }
    },
  },
}
</script>

<style scoped>
p{
  color: white;
}
img {
  width: 250px;
  height: 350px;
}
a,
button {
  padding: 5px 10px;
  background-color: #dd4377;
  color: white;
  border: none;
  cursor: pointer;
}
button {
  margin-right: 5px;
}
strong {
  font-size: 20px;
}
.noDisplay {
  overflow: hidden;
  max-height: 0;
  transition: all 0.5s ease-out;
}
.display {
  overflow: hidden;
  max-height: 300px;
  transition: max-height 0.5s ease-out;
}
.shareButton {
  position: absolute;
  top: 5px;
  right: 25px;
  border-radius: 99999999px;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  display: flex;
  align-items: center;
}

.buttonsContainer {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

@media (width: 320px) {
  .shareButton {
    top: 5px;
    right: 10px;
  }
}
@media (width: 375px) {
  .shareButton {
    top: 5px;
    right: 35px;
  }
}
@media only screen and (max-width: 768px) and (min-width: 411px) {
  .shareButton {
    top: 5px;
    right: 58px;
  }
}
@media (width: 540px) {
  .shareButton {
    top: 5px;
    right: 120px;
  }
}
</style>