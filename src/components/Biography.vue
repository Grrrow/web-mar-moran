<template>
    <div :class="{biograpy: true, 'full': full}">
        <div class="container">
            <div :class="{photofull: full, 'full': !full}">
                <img v-if="full" class="picture" src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/IMG_9508-2-scaled.jpg" alt="">
                <img v-else class="picture" src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/CF160358.jpg" alt="">
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
                    <p>{{ $t('biography.full.paragraph10') }}</p>
                    <p>{{ $t('biography.full.paragraph11') }}</p>
                    <p>{{ $t('biography.full.paragraph12') }}</p>
                    <p>{{ $t('biography.full.paragraph13') }}</p>
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
                    <p>{{ $t('biography.resume.paragraph5') }}</p>
                    <div class="sign">
                        <router-link class="link" to="/biography">
                            {{ $t('biography.knowMore') }}
                        </router-link>
                            <img src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/sign5.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['full']
}
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
    height: 365px;;
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

    }
}
@media (max-width: 650px) {
    .photo{
        width:300px;
        height: 200px;
    }
    .photo img{
        width: 350px;
        top: 10px;
        left: 1rem;
    }
    .content{
        margin-left: 0;
    }
}
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #dd4377; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>