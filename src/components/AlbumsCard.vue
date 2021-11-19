<template>
  <div class="maindiv">
    <div class="divrelative">
      <div class="album_content">
        <audio :id="`${id}`">
          <source :id="`${id}`" :src="source" />
        </audio>
        <img v-lazy="album.coverURL" :class="`album ${playing ? 'goleft' : ''}`"/>
        <img
          :class="`needle ${playing ? 'visible' : ''}`"
          src="../assets/images/music/needle.png"
          alt=""
        />
        <div v-if="!controls">
          <div class="control" @click="playMusic" v-if="!playing">
            <i class="fa fa-play"></i>
          </div>
        </div>
        <img
          :class="`cd ${playing ? 'spin' : ''}`"
          src="../assets/images/music/vinyl.png"
          alt=""
        />
      </div>
      <div :class="`${controls ? 'showcontrols' : 'controlhidden'}`">
        <p class="subtitle">{{ mtitle }}</p>
        <p class="subtitle">{{ album.soprano }} y {{ album.pianista }}</p>
        <div class="audiocontent">
          <input
            class="slider"
            :id="`slider${id}`"
            type="range"
            min="0"
            :max="music.duration"
            v-model="current"
          />
          <p style="color: white; width: 20%">{{ time }}</p>
        </div>
        <div class="audio_controls">
          <div @click="prevTrack()">
            <i class="fas fa-lg fa-step-backward"></i>
          </div>
          <div @click="playMusic()">
            <div v-if="!playing">
              <i class="fa fa-play"></i>
            </div>
            <div v-else>
              <i class="fa fa-pause"></i>
            </div>
          </div>
          <div @click="nextTrack()">
            <i class="fas fa-lg fa-step-forward"></i>
          </div>
        </div>
      </div>
      <p class="title">
        {{ album.title }}
      </p>
      <p style="color: white; text-align: center">Disponible en:</p>
      <div class="rrss">
        <div>
          <a :href="album.spotify" target="”_blank”" class="spotifylink">
            <i class="fab fa-2x fa-spotify"></i>
          </a>
        </div>
        <div>
          <a :href="album.appleMusic" target="”_blank”">
            <i class="fab fa-2x fa-apple"></i>
          </a>
        </div>
        <div>
          <a :href="album.amazonMusic" target="”_blank”" class="amazonlink">
            <i class="fab fa-2x fa-amazon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['album', 'id'],
  data() {
    return {
      playing: false,
      source: '',
      mtitle: '',
      music: '',
      current: 0,
      controls: false,
      currentTrack: 0,
      time: '00:00',
      slider: '',
    }
  },
  mounted() {
    console.log(this.album.srcSong)
    this.source = this.album.srcSong
    console.log(this.source)
    this.mtitle = this.album.songTitle[this.currentTrack]
    this.music = document.getElementById(this.id)
  },
  methods: {
    playMusic() {
      let slider = document.getElementById('slider' + this.id)
      this.controls = true
      if (this.music.paused) {
        this.music.play()
        this.playing = true
      } else {
        this.music.pause()
        this.playing = false
      }
      this.music.ontimeupdate = () => this.getCurrent()
      slider.oninput = () => (this.music.currentTime = this.current)
    },
    getCurrent() {
      this.current = Math.trunc(this.music.currentTime)
      let minutes = '0' + Math.floor(this.current / 60)
      let seconds = '0' + (this.current - minutes * 60)
      this.time = minutes.substr(-2) + ':' + seconds.substr(-2)
    },
    nextTrack() {
      if (this.currentTrack < this.album.songs.length - 1) {
        this.currentTrack++
      } else {
        this.currentTrack = 0
      }
      if (this.music.play) {
        this.music.load()
      }
      this.source = this.album.srcSong[this.currentTrack].url
      this.mtitle = this.album.songTitle[this.currentTrack]
      this.playMusic()
    },
    prevTrack() {
      if (this.currentTrack > 0) {
        if (this.music.play) {
          this.music.load()
        }
        this.currentTrack--
        this.source = this.album.srcSong[this.currentTrack].url
        this.mtitle = this.album.songTitle[this.currentTrack]
        this.playMusic()
      }
    },
  },
}
</script>
<style scoped>
.maindiv {
  padding: 35px;
  background-color: black;
  border-radius: 10px;
}

.divrelative {
  position: relative;
  width: 100%;
}

.album {
  position: relative;
  width: 100%;
  z-index: 2;
}
.needle {
  position: absolute;
  top: -40px;
  right: -40px;
  z-index: 1;
  opacity: 0;
}
.cd {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
.audiocontent {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.control {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* padding: 5px; */
  display: flex;
  background-color: white;
  color: rgb(221, 67, 119);
  position: absolute;
  top: 25%;
  left: calc(50% - 20px);
  z-index: 3;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 22px;
  font-family: Changa, sans-serif;
  color: rgb(221, 67, 119);
  text-align: center;
  line-height: 20px;
  font-weight: 400;
}
.subtitle {
  color: white;
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

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  background: rgb(221, 67, 119);
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: white;
  position: relative;
  z-index: 3;
  cursor: pointer;
}

.controlhidden {
  display: none;
}
.showcontrols {
  display: block;
}
.audio_controls {
  display: flex;
  justify-content: center;
}
.audio_controls div {
  cursor: pointer;
}
.rrss {
  display: flex !important;
  justify-content: space-around;
}
.audio_controls div {
  color: white;
}
.rrss div {
  width: 20%;
  padding: 3px;
  border-radius: 6px;
  border: white 1px solid;
  color: white;
}
.spotifylink:hover {
  color: #1db954;
  transition: 0.5s;
}
.amazonlink:hover {
  color: #ff9900;
  transition: 0.5s;
}
.maindiv:hover .control {
  opacity: 1;
  transition: 0.5s;
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