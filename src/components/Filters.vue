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
        {
          filterWord: 'concurso',
          text: 'Concursos',
        },
        {
          filterWord: 'productions',
          text: 'Produciones',
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
  overflow-x: auto;
  margin: 0 auto;
}
.filters p {
  min-width: 80px;
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

@media (max-width: 490px) {
  p{
    width: 80px;
    font-size: 12px;
  }
  .filters{
    justify-content: unset;
  }
}
</style>