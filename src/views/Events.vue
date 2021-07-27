<template>
  <div class="container">
    <h1>Eventos</h1>
    <div class="responsiveCalendar">
      <v-calendar
        :masks="masks"
        transition="slide-v"
        :rows="$screens({ default: 1, lg: 1 })"
        :is-expanded="true"
        :attributes="attributes"
        @dayclick="dayClicked"
      />
    </div>
    <div v-if="selectedDay">
      <EventCalendar :event="selectedDay" />
    </div>
    <div v-else>
      <EventCalendar :first="firstEvent" />
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import EventCalendar from '../components/EventCalendar.vue'
import { eventsCollection } from '../content/firebase'
import '../assets/styles/Calendar.css'

export default {
  setup() {
    useMeta({
      title: 'Eventos',
      htmlAttrs: { lang: 'es', amp: true },
    })
  },
  components: { EventCalendar },
  async created() {
    const events = await eventsCollection.get()
    this.eventsList = events.data().eventsList
    console.log(this.eventsList)
    this.sortEventsByDate()
  },
  data() {
    return {
      dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      masks: {
        weekdays: 'W',
      },
      firstEvent: [],
      date: new Date(),
      selectedDay: null,
      eventsList: [],
    }
  },
  methods: {
    dayClicked(day) {
      this.selectedDay = day
    },
    sortEventsByDate() {
      this.eventsList.sort((a, b) => {
        return new Date(a.date.toDate().toDateString()) - new Date(b.date.toDate().toDateString())
      })
      this.firstEvent = this.eventsList[0]
    },
  },
  computed: {
    attributes() {
      return this.eventsList.map((event) => {
        console.log(new Date(event.date.toDate()))
        return {
          dates: new Date(event.date.toDate().toDateString()),
          customData: event,
          image: event.poster,
          highlight: event.color,
          hour: event.hour,
          popover: {
            label: event.location,
          },
        }
      })
    },
  },
}
</script>
<style scoped >
h1 {
  color: white;
}

.container {
  max-width: var(--app-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
}
.responsiveCalendar {
  margin: 0 auto;
  width: 100%;
}
</style>
