<template>
    <header>
        <div class="container">
            <a href="/"><img src="//39373757.servicio-online.net/wp-content/uploads/2017/11/sign-300x38-1.png" alt="Mar Morán"></a>
            <div class="links">
                <a class="link" href="">Home</a>
                <a class="link" href="">{{ $t('header.photo') }}</a>
                <a class="link" href="">{{ $t('header.music') }}</a>
                <a class="link" href="">{{ $t('header.video') }}</a>
                <a class="link" href="">{{ $t('header.biography') }}</a>
                <a class="link" href="">{{ $t('header.contact') }}</a>
                <a class="link" href="">{{ $t('header.schedule') }}</a>
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