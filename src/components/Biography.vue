<template>
    <div class="biography">
        <div class="photo">
            <img src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/CF160358.jpg" alt="">
        </div>
        <div class="container">
            <div class="text">
            <h1 class="title">{{ $t('biography.title') }}</h1>
                <p>{{ $t('biography.resume.paragraph1') }}</p>
                <p>{{ $t('biography.resume.paragraph2') }}</p>
                <p>{{ $t('biography.resume.paragraph3') }}</p>
                <p>{{ $t('biography.resume.paragraph4') }}</p>
                <p>{{ $t('biography.resume.paragraph5') }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.biography{
    display: flex;

}
.container{
    width: 100%;
    display: flex;
    justify-content: center;
}
.text{
    color: var(--white-00);
    text-align: justify;
    max-width: 610px;
}
.photo img{
    width: 560px;
}
</style>