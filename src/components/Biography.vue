<template>
    <div :class="{biograpy: true, 'full': full}">
        <div class="container">
            <div :class="{photofull: full, photo: !full, 'full': !full}">
                <img v-if="full" loading="lazy" class="picture" src="https://dl.airtable.com/.attachmentThumbnails/62ac311fb9814c9db3b78bec19504474/de0952cd" alt="Mar Morán picture">
                <img v-else loading="lazy" class="picture" src="https://dl.airtable.com/.attachmentThumbnails/c4ae69fda3dafc8b72407335cdc37274/58f711a0" alt="Mar Moran Picture">
            </div>
            <div class="content" :class="{margincontent: !full}">
                <div v-if="full" class="textfull">
                    <h1 class="title">{{ $t('biography.title') }}</h1>
                    <p>{{ $t('biography.full.paragraph1') }}</p>
                    <p>{{ $t('biography.full.paragraph2') }}</p>
                    <p>{{ $t('biography.full.paragraph3') }}</p>
                    <p>{{ $t('biography.full.paragraph4') }}</p>
                    <p>{{ $t('biography.full.paragraph5') }}</p>
                    <p>{{ $t('biography.full.paragraph6') }}</p>
                    <p>{{ $t('biography.full.paragraph7') }}</p>
                    <p>{{ $t('biography.full.paragraph8') }}</p>
                    <p>{{ $t('biography.full.paragraph9') }}</p>
                    <div class="sign">
                        <img src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/sign5.png" alt="">
                    </div>
                </div>
                <div v-else class="text">
                    <h1 class="title">{{ $t('biography.title') }}</h1>
                    <p><i class="quote">{{ $t('biography.resume.paragraph1') }}</i></p>
                    <p>{{ $t('biography.resume.paragraph2') }}</p>
                    <p>{{ $t('biography.resume.paragraph3') }}</p>
                    <p>{{ $t('biography.resume.paragraph4') }}</p>
                    <ul>
                       <li>Primer Premio Absoluto en el IV Concurs Internacional de Cant “Martín y Soler” de Valencia (2021).</li>
                       <li>Primer Premio otorgado por el jurado en el 9º Certamen Internacional de Habaneras para Solistas Líricos dentro del marco del 67 Certamen internacional de Habaneras y Polifonía (2021).</li>
                       <li>Primer Premio en el XXVI Certamen Internacional de Jóvenes Intérpretes “Pedro Bote” (2021).</li>
                       <li>Tercer Premio en la XXXVIII Concurso Internacional de Canto “Ciudad de Logroño - La Rioja” en la categoría de voces femeninas (2021).</li>
                       <li>Segundo Premio en el IV Concurso de Canto “Compostela Lírica” (2021).</li>
                       <li>“Premio Speciale Donizetti” en el XIV Concorso Internazionale di Canto Lírico “Giulio Neri” en Siena, Italia, a la mejor interpretación de un aria de Gaetano Donizetti (2022)</li>
                    </ul>
                    <p>{{ $t('biography.resume.paragraph5') }}</p>
                    <p>{{ $t('biography.resume.paragraph6') }}</p>
                    <div class="sign">
                        <router-link class="link" to="/biography">
                            {{ $t('biography.knowMore') }}
                        </router-link>
                            <img loading="lazy" src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/sign5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  props: ["full"],
};
</script>
<style scoped>
.biograpy{
    display: flex;
    justify-content: center;
    padding: 4rem 0;
}
.biograpy.full{
    padding: 0;
}
.biograpy.full .container{
    position: relative;
}
.biograpy.full .container .content{
    max-width: 100%;
    justify-content: flex-end;
}

.link{
    text-decoration: underline;
}
.container{
    max-width: var(--app-max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100vh;
}
.content{
    width: 100%;
    display: flex;
    max-width: 460px;
    justify-content: center;
    margin-left: 2rem;
}
.margincontent{
    margin: 5rem
}
.content .title{
    font-family: "Changa", sans-serif;
    font-weight: normal;
    font-size: 48px;
}
.quote{
    font-size: 20px;
    font-weight: bold;
}
.text{
    font-family: Lato, sans-serif;
    color:rgba(255, 255, 255, 0.8);
    text-align: justify;
    max-width: 610px;
}
.textfull{
    font-family: Lato, sans-serif;
    color:rgba(255, 255, 255, 0.8);
    text-align: justify;
    max-width: 540px;
}
.text p{
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
}
.photofull{
    width: 486px;
    height: 765px;;
    border: 1px solid #ffff;
    padding: 2rem;
    position: fixed;
    top: 5rem;
}
.photo{
    width: 526px;
    height: 750px;;
    border: 1px solid #ffff;
    padding: 2rem;
    position: relative;
}
.sign{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 0;
}
.sign img{
    height: 40px;
}
.picture{
    width: 560px;
    position: absolute;
    left: 2rem;
    top: 2rem;
}
.photofull img{
    width: 560px;
    position: absolute;
    left: 2rem;
    top: 2rem;
}
li{
    margin: 1rem 0;
}
@media (max-width: 1240px) {
   .biograpy.full.container, .container {
        justify-content: center;
        flex-wrap: wrap;
    }

    .photofull{
        position: relative;
    }
    .biograpy.full .container .content{
        max-width: 500px;
        margin-top: 90px;

    }
}
@media (max-width: 650px) {
  .photo {
    width: 250px;
    height: 200px;
  }
  .photo img {
    width: 300px;
    top: 10px;
    left: 1rem;
  }
  .photofull {
    width: 200px;
    height: 300px;
  }
  .photofull img {
    width: 250px;
    top: 1rem;
    left: 1rem;
    position: absolute;
  }
  .content {
    margin-left: 0 auto;
  }
  p{
    text-align: left;
  }
  .content.margincontent{
      margin: 2rem;
  }
}
</style>
