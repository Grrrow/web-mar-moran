
<template>
  <div class="main">
    <div class="container">
      <Contact />
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import Contact from "../components/Contact.vue";
export default {
  components: { Contact },
  setup(){
    useMeta({
      title: 'Contacto',
      htmlAttrs: { lang: 'en', amp: true }
    })
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.container {
  max-width: var(--app-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
}
</style>