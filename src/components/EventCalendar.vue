<template>
  <div class="selected-day">
    <h2 class="dateTitle" v-if="!noDate">
      {{ dateLocalString }}
    </h2>
    <h2 class="dateTitle" v-else>
      {{ noDate }}
    </h2>
    <div v-if="!empty" class="eventInfo">
      <div v-if="eventMap.poster" class="eventImage">
        <img v-lazy="eventMap.poster" />
      </div>
      <div class="eventDescription">
        <div class="ornamentText" >
          <h3 class="locationTitle">{{ eventMap.location }}</h3>
        </div>
        <div class="dateContent">
          <p class="paragraph">
            {{ eventMap.resume }}
          </p>
          <div class="eventHour">
            <i class="far fa-clock" />
            <p class="paragraph">{{ dateTimeString }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="ornamentText">
        <h3>No hay eventos programados para este día</h3>
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
        let minutes = new Date(this.eventMap.date).getMinutes().toString()
        minutes = minutes.length === 1 ? `0${minutes}` : minutes
        this.dateLocalString = new Date(this.eventMap.date).toLocaleDateString()
        this.dateTimeString = `${new Date(this.eventMap.date).getHours()}:${minutes}`
      }
    },
  },
}
</script>

<style scoped>
</style>