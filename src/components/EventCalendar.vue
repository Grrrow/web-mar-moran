<template>
  <div class="selected-day">
    <h2 v-if="!noDate">
      {{ eventMap.date.toLocaleDateString('es-ES', dateOptions) }}
    </h2>
    <h2 v-else>
      {{ noDate }}
    </h2>
    <div v-if="!empty" class="eventInfo">
      <div class="eventImage">
        <img :src="eventMap.image" />
      </div>
      <div class="eventDescription">
        <div class="ornamentText">
          <img src="../assets/images/ornament.png" alt="" />
          <h3>{{ eventMap.description }}</h3>
          <img src="../assets/images/ornamentvolt.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          aperiam rerum impedit at aliquid odio dolorum id! Sint sapiente et
          nam, neque ab magni iure eligendi, odio autem totam amet! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quaerat aperiam rerum
          impedit at aliquid odio dolorum id! Sint sapiente et nam, neque ab
          magni iure eligendi, odio autem totam amet!
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
    <div v-else>
      <div class="ornamentText">
        <img src="../assets/images/ornament.png" alt="" />
        <h3>No hay eventos programados para este día</h3>
        <img src="../assets/images/ornamentvolt.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/styles/Calendar.css'

export default {
  props: ['event', 'first'],
  data() {
    return {
      noDate: '',
      eventMap: {},
      dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      empty: false,
    }
  },
  created() {
    this.checkEvent()
  },
  beforeUpdate() {
    this.checkEvent()
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
    checkEvent() {
      if (this.event) {
        if (this.event.attributes.length > 0) {
          this.eventMap = this.event.attributes[0].customData
          this.noDate = ''
          this.empty = false
        } else {
          this.empty = true
          this.noDate = this.event.ariaLabel
        }
      } else if (this.first) {
        this.eventMap = this.first
        this.noDate = ''
        this.empty = false
      }
    },
  },
}
</script>

<style scoped>
</style>