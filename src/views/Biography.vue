
<template>
  <div class="main">
    <div class="container">
      <Biography :full="true" />
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'

import Biography from "../components/Biography.vue";
export default {
  components: { Biography },
  setup(){
    useMeta({
      title: 'Biografia',
      htmlAttrs: { lang: 'es', amp: true }
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