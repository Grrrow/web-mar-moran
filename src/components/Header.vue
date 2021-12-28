<template>
    <header>
        <div class="container">
            <router-link class="logo" to="/"><img src="https://39373757.servicio-online.net/wp-content/uploads/2017/11/sign-300x38-1.png" alt="Mar Morán"></router-link>
            <div class="menu-desktop">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="photos">{{ $t('header.photo') }}</router-link>
                <router-link class="link" to="videos">{{ $t('header.video') }}</router-link>
                <router-link class="link" to="music">{{ $t('header.music') }}</router-link>
                <router-link class="link" to="biography">{{ $t('header.biography') }}</router-link>
                <router-link class="link" to="events">{{ $t('header.events') }}</router-link>
                <router-link class="link" to="contact">{{ $t('header.contact') }}</router-link>
                <router-link class="link" to="news">{{ $t('header.news') }}</router-link>
                <select class="languaje-modal" v-model="$i18n.locale">
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
            </div>
            <select class="languaje-modal languaje-mobile" v-model="$i18n.locale">
                  <option value="en">en</option>
                  <option value="es">es</option>
            </select>
            <Slide class="menu-mobile" :closeOnNavigation="true" right>
                <router-link to="/">Home</router-link>
                <router-link to="photos">{{ $t('header.photo') }}</router-link>
                <router-link to="music">{{ $t('header.music') }}</router-link>
                <router-link to="videos">{{ $t('header.video') }}</router-link>
                <router-link to="biography">{{ $t('header.biography') }}</router-link>
                <router-link to="events">{{ $t('header.events') }}</router-link>
                <router-link to="contact">{{ $t('header.contact') }}</router-link>
                <router-link to="news">{{ $t('header.news') }}</router-link>
            </Slide>
        </div>
    </header>
</template>
<script>
import { Slide } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {
      Slide // Register your component
  },
  mounted(){
    document.querySelector(".bm-burger-button").style="right: 25px; left: inherit; top: 16px;"
    Array.from(document.querySelectorAll('.bm-burger-bars')).map( (item, index) => item.style =`background-color: #ffff; top:${index * 12}px`)
  }
}
</script>
<style scoped>
header{
    background: var(--gray-00);
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;

}
.logo {
  max-width: 50%;
}
.logo img{
  width: 100%;
}
.container{
    max-width: var(--app-max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.menu-desktop{
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
.languaje-modal{
  background: transparent;
  outline: none;
  border: 1px solid  rgb(60, 60, 60);
  color: var(--white-00);
  width: 75px;
  padding: 12px;
}
.languaje-modal option{
  background: var(--gray-00);
  height: 100px;
  outline: none;
  border: none;
  padding: 1rem;
  height: 15px;
}
.link:hover::before,  .link:focus::before{
  width: 70%;
}
.languaje-mobile,  .menu-mobile{
  display: none;
}
@media(max-width: 1030px) {
  .menu-desktop{
    display: none;
  }
  .menu-mobile{
    display: block;
  }
  .languaje-mobile{
    display: block;
    position: absolute;
    right: 100px;
  }
}
</style>