<template>
    <div class="biography">
        <div class="container">
            <div class="photo">
                <img src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/CF160358.jpg" alt="">
            </div>
            <div class="content">
                <div class="text">
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
<style scoped>
.biography{
    display: flex;
    justify-content: center;
}
.link{
    text-decoration: underline;
}
.container{
    max-width: var(--app-max-width);
    margin: 5rem;
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
.text p{
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
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
.photo img{
    width: 560px;
    position: absolute;
    left: 2rem;
    top: 1rem;
}
@media (max-width: 1240px) {
    .container {
        justify-content: center;
        flex-wrap: wrap;
    }
    .content{
        max-width: var(--app-max-width);
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
</style>