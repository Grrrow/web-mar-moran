<template>
  <div class="filters">
    <p
      v-for="(filter, index) in filters"
      :key="index"
      @click="changeFilter(filter.filterWord)"
      :class="{ underline: filter.filterWord === filterWord }"
    >
      {{ filter.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['filterWord'],
  data() {
    return {
      filters: [
        {
          filterWord: '',
          text: 'Todo',
        },
        {
          filterWord: 'backstage',
          text: 'Backstage',
        },
        {
          filterWord: 'concerts',
          text: 'Conciertos',
        },
        {
          filterWord: 'studio',
          text: 'Estudio',
        },
      ],
    }
  },
  methods: {
    changeFilter(newFilter) {
        this.$emit('setFilter', newFilter)
    },
  },
}
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 300px;
}
.filters p {
  cursor: pointer;
  position: relative;
}
p:not(.underline):after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(221, 67, 119);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
p:not(.underline):hover:after {
  width: 100%;
  left: 0;
}
.underline {
  border-bottom: rgb(221, 67, 119) 2px solid;
}

@media (width: 320px) {
  p {
    font-size: 12px;
  }
  .filters {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 200px;
  }
}
</style>