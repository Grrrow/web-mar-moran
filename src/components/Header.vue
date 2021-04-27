<template>
    <header>
        <div class="container">
            <router-link to="/"><img src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/sign-300x38-1.png" alt="Mar Morán"></router-link>
            <div class="links">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="">{{ $t('header.photo') }}</router-link>
                <router-link class="link" to="">{{ $t('header.music') }}</router-link>
                <router-link class="link" to="">{{ $t('header.video') }}</router-link>
                <router-link class="link" to="">{{ $t('header.biography') }}</router-link>
                <router-link class="link" to="">{{ $t('header.contact') }}</router-link>
                <router-link class="link" to="news">{{ $t('header.news') }}</router-link>
                <select v-model="$i18n.locale">
                    <option value="en">en</option>
                    <option value="es">es</option>
                </select>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    background: var(--gray-00);
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
}
.container{
    max-width: var(--app-max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.links{
    display: flex;

}
.link{
  display: block;
  position: relative;
  margin: 8px;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid transparent;
  transition: 1s;
  border-top: 1px solid var(--white-00);
  border-bottom: 1px solid var(--white-00);
  z-index: 0;
  cursor: pointer;
}
.link:focus{
    outline: none;
}
.link::after, .link::before{
  background: var(--gray-00);
  width: 100%;
  right: 0px;
  height: 1px;
  content: " ";
  position: absolute;
  z-index: -1;
  transition: 0.2s;
}
.link::after{
  top: -1px;
  right: 0px;
}
.link:hover::after, .link:focus::after{
  width: 70%;
}
.link::before{
  bottom: -1px;
  left: 0px;
}
.link:hover::before,  .link:focus::before{
  width: 70%;
}
</style>