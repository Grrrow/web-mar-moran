<template>
  <div
    class="event-card"
    :style="{ backgroundImage: 'url(' + event.poster + ')' }"
  >
    <div @click="shareEvent()" style="position: absolute; top: 1%; right: 1%; width: 50px; border: white 2px solid; color: white">
      <i class="fas fa-share-alt fa-2x"></i>
    </div>
    <div class="info">
      <h3 class="info__title">{{event.title}}</h3>
      <h4 class="info__role">- {{event.role}} -</h4>
      <p class="info__date">{{ event.location }} | {{event.date.toDate().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}}</p>
      <div class="extra-info">
        <p v-if="event.resume" class="resume">{{event.resume}}</p>
        <a v-if="event.link" :href="event.link" class="actions">
          Entradas
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ["event"],
  data() {
    return {
      dateOptions: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  methods: {
    shareEvent(){
      if(navigator.share) {
        const shareData = {
          title: this.event.title,
          text: 'Mi gente, se viene actuación, nos echamos un cafelito y nos vamos pa Oviedo',
          url: this.event.link
        } 
        navigator.share(shareData)
      }
      else{
        console.log("navigator non compatible");
      }
    }
  },
};
</script>
<style scoped>
    .event-card{
        height: 520px;
        width: 340px;
        background-size: cover;
        position: relative;
        transition: all 0.4s linear;
        cursor: pointer;
    }
    .event-card:hover{
      outline: 1px solid rgb(255, 255, 255);
    }
    .extra-info{
      padding:1rem;
      padding-top: 0;
    }
    .resume {
      font-size: 14px;
      opacity: 0.8;
      word-spacing: 2px;
      padding: 1rem 0;
      padding-bottom: 2rem;
    }
    .extra-info a {
      border: 1px solid;
      padding: 1rem;
    }
    .info{
      position: absolute;
      bottom: 0;
      width: 100%;
      background:rgba(0, 0, 0, 0.7);
      color:rgb(255, 255, 255);
    }
    .info__date{
      text-align: center;
    }
    .info__title{
      font-size: 30px;
      color:rgb(255, 255, 255);
    }
</style>
