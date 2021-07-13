<template>
  <div id="main">
    <h1>Eventos</h1>
    <div class="responsiveCalendar">
      <v-calendar
        :masks="masks"
        class="test"
        transition="slide-v"
        :rows="$screens({ default: 1, lg: 2 })"
        :is-expanded="$screens({ default: false, lg: true })"
        :attributes="attributes"
        @dayclick="dayClicked"
      />
    </div>
    <div v-if="selectedDay" class="selected-day">
      <h3>
        {{
          selectedDay.date.toLocaleDateString('es-ES', dateOptions)
        }}
      </h3>
      <div
        class="eventInfo"
        v-for="attr in selectedDay.attributes"
        :key="attr.key"
      >
        <div class="eventImage">
          <img :src="attr.customData.image" />
        </div>
        <div class="eventDescription">
          <h4>{{ attr.customData.description }}</h4>
          <p style="text-align: left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aperiam rerum impedit at aliquid odio dolorum id! Sint sapiente et
            nam, neque ab magni iure eligendi, odio autem totam amet!
          </p>
          <div class="eventHour">
            <i class="far fa-clock" />
            <p>{{ attr.customData.hour }}</p>
          </div>
        </div>
      </div>
      <div v-if="selectedDay.attributes.length === 0" class="eventInfo">
        <h3>No hay eventos programados para este día</h3>
      </div>
    </div>
    <div v-if="!selectedDay" class="selected-day">
      <h3>
        {{
          firstEvent.date.toLocaleDateString('es-ES',dateOptions)
        }}
      </h3>
      <div class="eventInfo">
        <div class="eventImage">
          <img :src="firstEvent.image" />
        </div>
        <div class="eventDescription">
          <h4>{{ firstEvent.description }}</h4>
          <p style="text-align: left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aperiam rerum impedit at aliquid odio dolorum id! Sint sapiente et
            nam, neque ab magni iure eligendi, odio autem totam amet!
          </p>
          <div class="eventHour">
            <i class="far fa-clock" />
            <p>{{ firstEvent.hour }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import '../assets/styles/Calendar.css'

export default {
  setup() {
    useMeta({
      title: 'Eventos',
      htmlAttrs: { lang: 'es', amp: true },
    })
  },
  created() {
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
        weekdays: 'WWWW',
      },
      firstEvent: [],
      date: new Date(),
      selectedDay: null,
      todos: [
        {
          id: 1,
          description: 'Concierto en Herrera del Duque',
          date: new Date(2021, 6, 15),
          hour: '18:00',
          isCompleted: false,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/9191l6uKADL._SL1500_.jpg',
          color: 'orange',
        },
        {
          id: 2,
          description: 'Concierto en Llerena',
          date: new Date(2021, 6, 14),
          hour: '18:00',
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
#main {
  margin: 30px;
}
.responsiveCalendar {
  margin: 0 auto;
  width: 75%;
}

.selected-day {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 75%;
}
h1 {
  color: white;
}
h3 {
  text-align: center;
  width: 100%;
}
.eventInfo {
  display: flex;
  padding: 20px;
}
.eventImage img {
  height: auto;
  width: 400px;
}
.eventDescription {
  padding: 0 15px;
}

.eventHour {
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: 70px;
}
</style>
