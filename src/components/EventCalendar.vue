<template>
  <div class="selected-day">
    <h2 v-if="!noDate">
      {{ dateLocalString }}
    </h2>
    <h2 v-else>
      {{ noDate }}
    </h2>
    <div v-if="!empty" class="eventInfo">
      <div class="eventImage">
        <img :src="eventMap.poster" />
      </div>
      <div class="eventDescription">
        <div class="ornamentText">
          <img src="../assets/images/ornament.png" alt="" />
          <h3>{{ eventMap.location }}</h3>
          <img src="../assets/images/ornamentvolt.png" alt="" />
        </div>
        <div class="dateContent">
          <p>
            {{ eventMap.resume }}
          </p>
          <div class="eventHour">
            <i class="far fa-clock" />
            <p>{{ dateTimeString }}</p>
          </div>
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
      dateLocalString: '',
      dateTimeString: '',
      noDate: '',
      eventMap: {},
      dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      hourOptions: {
        timeZone: 'Europe/Madrid',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      },
      empty: false,
    }
  },
  created() {
    this.checkEvent()
    this.checkDate()
  },
  beforeUpdate() {
    this.checkEvent()
    this.checkDate()
  },
  methods: {
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
    checkDate() {
      if (this.eventMap.date) {
        this.dateLocalString = this.eventMap.date
          .toDate()
          .toLocaleDateString('es-ES', this.dateOptions)
        this.dateTimeString = this.eventMap.date
          .toDate()
          .toLocaleTimeString('es-ES', this.hourOptions)
      }
    },
  },
}
</script>

<style scoped>
</style>