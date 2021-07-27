<template>
  <div class="event-card" :style="{ backgroundImage: 'url(' + event.poster + ')' }">
    <div class="info">
      <h3 class="info__title">{{event.title}}</h3>
      <h4 class="info__role">- {{event.role}} -</h4>
      <p class="info__date">{{ event.location }} | {{event.date}}</p>
      <div class="extra-info">
        <p class="resume">{{event.resume}}</p>
        <a :href="event.link" class="actions">
          Comprar ahora
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['event']
};
</script>
<style scoped>
    .event-card{
        height: 520px;
        width: 340px;
        background-size: cover;
        position: relative;
        border: 1px solid transparent;
        transition: all 0.4s linear;
        cursor: pointer;
    }
    .event-card:hover{
      border-color: rgb(255, 255, 255);
    }
    .extra-info{
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .info{
      position: absolute;
      bottom: 0;
      width: 100%;
      background:rgba(0, 0, 0, 0.7);
      color:rgb(255, 255, 255);
    }
    .info__title{
      font-size: 30px;
      color:rgb(255, 255, 255);
    }
</style>
