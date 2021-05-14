<template>
  <div class="maindiv">
    <div class="padding_20">
      <div class="album_content">
        <audio :id="'song' + id">
          <source :id="'source'+id" :src="source" type="audio/mpeg" />
        </audio>
        <img
          class="album"
          :class="{ goleft: playing }"
          :src="album.cover"
          alt=""
        />
        <img
          class="aguja"
          :class="{ visible: playing }"
          src="src/assets/images/music/aguja1.png"
          alt=""
        />
        <div
          class="control"
          @click="playMusic()"
          v-if="!playing"
        >
          <i class="fa fa-play"></i>
        </div>
        <div
          class="control"
          @click="playMusic()"
          v-else
        >
          <i class="fa fa-pause"></i>
        </div>
        <img
          class="cd"
          :class="{ spin: playing }"
          src="src/assets/images/music/vinyl.png"
          alt=""
        />
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-around;
        "
      >
        <input
          class="slider"
          :id="'slider' + id"
          type="range"
          min="0"
          :max="music.duration"
          v-model="current"
        />
        <p style="color: white; width: 20%">{{ time }}</p>
      </div>
      <p class="title">
        {{album.title}}
      </p>
      <p style="color: white">Disponible en:</p>
      <div class="rrss">
        <div>
          <i class="fab fa-2x fa-spotify"></i>
        </div>
        <div>
          <i class="fab fa-2x fa-apple"></i>
        </div>
        <div>
          <i class="fab fa-2x fa-amazon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["album", "id"],
  data() {
    return {
      playing: false,
      source: '',
      music: "",
      current: 0,
      time: "0:00",
    };
  },
  mounted() {
    this.source = "src/assets/audio/"+ this.album.songs[1].src
    console.log(this.album.songs[1].title)
  },
  methods: {
    playMusic() {
      this.music = document.getElementById("song" + this.id);
      let slider = document.getElementById("slider" + this.id);
      console.log(this.music.duration);
      if (this.music.paused) {
        this.music.play();
        this.playing = true;
      } else {
        this.music.pause();
        this.playing = false;
      }
      this.music.ontimeupdate = () => this.getCurrent();
      slider.oninput = () => (this.music.currentTime = this.current);
    },
    getCurrent() {
      this.current = Math.trunc(this.music.currentTime);
      let minutes = "0" + Math.floor(this.current / 60);
      let seconds = "0" + (this.current - minutes * 60);
      this.time = minutes.substr(-2) + ":" + seconds.substr(-2);
    },
  },
};
</script>
<style scoped>
.maindiv {
  padding: 35px;
  background-color: black;
  border-radius: 10px;
}

.padding_20 {
  position: relative;
}

.album {
  position: relative;
  z-index: 2;
}
.aguja {
  position: absolute;
  top: -40px;
  right: -40px;
  z-index: 1;
  opacity: 0;
}
.cd {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.control {
  width: 10% !important;
  border-radius: 50%;
  padding: 5px;
  background-color: white;
  color: rgb(221, 67, 119);
  position: absolute;
  top: 24%;
  left: 43%;
  z-index: 3;
  cursor: pointer;
}
.title {
  font-size: 24px;
  font-family: Changa, sans-serif;
  color: rgb(221, 67, 119);
  text-align: center;
  line-height: 20px;
  font-weight: 400;
}

.padding_20 * {
  width: 100%;
}
.goleft {
  opacity: 0;
  transition: all 0.5s linear 0s;
}
.visible {
  opacity: 1;
}
.spin {
  transform: translateX(30%);
  transition: all 0.3s linear 0s;
  animation-name: spin;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  background: rgb(221, 67, 119);
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: white;
  position: relative;
  z-index: 3;
  cursor: pointer;
}

.rrss {
  display: flex;
  justify-content: space-around;
}

.rrss div {
  width: 20%;
  padding: 3px;
  border-radius: 6px;
  border: white 1px solid;
  color: white;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>