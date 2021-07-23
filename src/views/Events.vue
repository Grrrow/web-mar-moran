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

import '../assets/styles/Calendar.css'

export default {
  setup() {
    useMeta({
      title: 'Eventos',
      htmlAttrs: { lang: 'es', amp: true },
    })
  },
  components: { EventCalendar },
  created() {
    this.todos.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
    this.firstEvent = this.todos[0]
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
      todos: [
        {
          id: 1,
          description: 'Concierto en Herrera del Duque',
          date: new Date('Julio 22, 2021 18:00:00'),
          isCompleted: false,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/9191l6uKADL._SL1500_.jpg',
          color: 'orange',
        },
        {
          id: 2,
          description: 'Concierto en Piornal',
          date: new Date('Julio 12, 2021 18:00:00'),
          isCompleted: false,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/9191l6uKADL._SL1500_.jpg',
          color: 'pink',
        },
        {
          id: 3,
          description: 'Concierto en Llerena',
          date: new Date('Julio 16, 2021 18:00:00'),
          isCompleted: false,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/9191l6uKADL._SL1500_.jpg',
          color: 'blue',
        },
      ],
    }
  },
  methods: {
    dayClicked(day) {
      this.selectedDay = day
    },
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
  computed: {
    attributes() {
      return this.todos.map((t) => ({
        key: `todo.${t.id}`,
        dates: t.date,
        customData: t,
        image: t.image,
        highlight: t.color,
        hour: t.hour,
        popover: {
          label: t.description,
        },
      }))
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
