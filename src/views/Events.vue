<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('events.title') }}</h1>
      <div class="responsiveCalendar">
        <Calendar 
          :masks="masks"
          transition="slide-v"
          :rows="1"
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
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import EventCalendar from '../components/EventCalendar.vue'
import FinishedEvents from '../components/FinishedEvents.vue'
import getEvents from '../content/events'
import '../assets/styles/Calendar.css'
import { Calendar } from 'v-calendar';


export default {
  setup() {
    useMeta({
      title: 'Eventos',
      htmlAttrs: { lang: 'es', amp: true },
    })
  },
  components: { EventCalendar, FinishedEvents, Calendar },
  async created() {
    const events = await getEvents()
    this.eventsList = events
    this.sortEventsByDate()
    this.getNextEvent()
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
        return new Date(a.date) - new Date(b.date)
      })
    },
    getNextEvent(){
      const nextEvents = this.eventsList.filter(show => new Date(show.date) >= new Date())
      this.firstEvent = nextEvents[0]
    }
  },
  computed: {
    attributes() {
      return this.eventsList.map((event) => {
        return {
          dates: new Date(event.date),
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
