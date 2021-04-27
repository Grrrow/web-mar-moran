<template>
  <div class="event-card">
    <div class="info">
      <h3 class="info__title">Tragedie Of Carmen</h3>
      <h4 class="info__role">- Frasquita -</h4>
      <p class="info__date">Oviedo | 12 de enero</p>
      <div class="extra-info">
        <p class="resume"></p>
        <div class="actions">
          Comprar ahora
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
    .event-card{
        height: 520px;
        width: 340px;
        background-image: url("https://www.cuadrosguapos.com/images/product_images/popup_images/330_0_cartel_de_opera_madama_butterfly.jpg");
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
