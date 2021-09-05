<template>
  <div class="container">
    <div @click="closeShareModal()" class="close">
      <i class="fas fa-times"></i>
    </div>
    <h2>Compartir</h2>
    <p>Compartir enlace vía:</p>
    <div class="links">
      <span @click="shareOnFacebook()"><i class="fab fa-facebook-f"></i></span>
      <span @click="shareOnTwitter()"><i class="fab fa-twitter"></i></span>
      <span @click="shareOnWhatsapp()"><i class="whatsapp fab fa-whatsapp"></i></span>
      <span @click="shareOnTelegram()"><i class="telegram fab fa-telegram-plane"></i></span>
    </div>
    <p>Copiar enlace</p>
    <div class="copyURL">
      <i class="fas fa-link"></i>
      <input readonly :placeholder="url" type="text" />
      <button type="button" @click="copyText">Copiar</button>
    </div>
    <span :class="`successText ${showText ? 'setOpacity' : 'nonOpacity'}`"
      >El enlace se ha copiado al portapapeles</span
    >
  </div>
</template>
<script>
export default {
  props: ['url'],
  data() {
    return {
      showText: false,
    }
  },
  methods: {
    copyText() {
      try {
        navigator.clipboard.writeText(this.url)
        this.showText = true
        setTimeout(() => {
          this.showText = false
        }, 3000)
      } catch (e) {
        throw e
      }
    },
    shareOnFacebook() {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.url}`,'_blank')
      this.closeShareModal()
    },
    shareOnTwitter() {
      const textToShare = 'prueba'
      window.open(`https://twitter.com/intent/tweet/?text=${textToShare}&url=${this.url}`,'_blank')
      this.closeShareModal()
    },
    shareOnTelegram() {
      const textToShare = 'prueba'
      window.open(`https://t.me/share/url?url=${this.url}&text=${textToShare}`,'_blank')
      this.closeShareModal()
    },
    shareOnWhatsapp() {
      const textToShare = 'prueba'
      window.open(`https://web.whatsapp.com/send?text=${textToShare}`,'_blank')
      this.closeShareModal()
    },
    closeShareModal() {
      this.$emit('close')
    }
  },
}
</script>

<style scoped>
.container {
  background: white;
  border-radius: 10px;
  margin: 0 90px;
  padding: 20px;
  position: absolute;
  width: 300px;
}
.links {
  display: flex;
  justify-content: space-around;
}
.links span:first-child {
  background: #067aea;
  color: white;
}
.links span:nth-child(2) {
  background: #00acee;
  color: white;
}
.links span:nth-child(3) {
  background: #25d366;
  color: white;
}
.links span:last-child {
  background: #0088cc;
  color: white;
}
.links span {
  align-items: center;
  border-radius: 50%;
  border: 1px solid transparent;
  display: flex;
  font-size: 25px;
  height: 50px;
  justify-content: center;
  width: 50px;
}
.links span:hover, button:hover, .close:hover{
  opacity: 0.7;
}
.copyURL {
  display: flex;
  align-items: center;
  border: gray 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  background: gainsboro;
  border-radius: 50%;
  padding: 5px 10px;
}
input {
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 14px;
  width: 100%;
  padding: 0 10px;
}
button {
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  background: #dd4377;
  cursor: pointer;
}
.successText {
  font-size: 14px;
  text-align: left;
  font-style: italic;
  background: #dd4377;
  color: white;
  padding: 10px;
  border-radius: 10px;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.setOpacity {
  opacity: 1;
}
.nonOpacity {
  opacity: 0;
}
</style>