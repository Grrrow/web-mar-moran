<template>
  <div class="selected-day">
    <h2>
      {{ eventMap.date.toLocaleDateString('es-ES', dateOptions) }}
    </h2>
    <div v-if="eventMap" class="eventInfo">
      <div class="eventImage">
        <img :src="eventMap.image" />
      </div>
      <div class="eventDescription">
        <div class="ornamentText">
          <img src="../assets/images/ornament.png" alt="">
          <h3>{{ eventMap.description }}</h3>
          <img src="../assets/images/ornamentvolt.png" alt="">
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aperiam rerum impedit at aliquid odio dolorum id! Sint sapiente et
          nam, neque ab magni iure eligendi, odio autem totam amet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aperiam rerum impedit at aliquid odio dolorum id! Sint sapiente et
          nam, neque ab magni iure eligendi, odio autem totam amet!
        </p>
        <div class="eventHour">
          <i class="far fa-clock" />
          <p
            v-text="
              formatDate(eventMap.date.getHours(), eventMap.date.getMinutes())
            "
          ></p>
        </div>
      </div>
    </div>
    <div v-else class="eventInfo">
      <h3>No hay eventos programados para este día</h3>
    </div>
  </div>
</template>

<script>
import '../assets/styles/Calendar.css'

export default {
  props: ['event', 'first'],
  data() {
    return {
      eventMap: {},
      dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      empty: false
    }
  },
  created() {
    console.log(this.event)
    if(this.event) {
        this.eventMap = this.event.attributes[0].customData
    }
    else if(this.first){
        this.eventMap = this.first
    }
  },
  beforeUpdate() {
    console.log(this.event)
    if(this.event) {
        this.eventMap = this.event.attributes[0].customData
    }
    else if(this.first){
        this.eventMap = this.first
    }
  },
  methods: {
    formatDate(hour, minute) {
      if (hour < 10) {
        hour = '0' + hour
      }
      if (minute < 10) {
        minute = '0' + minute
      }
      return hour + ':' + minute
    },
  },
}
</script>

<style scoped>
</style>