<template>
  <div class="events">
    <div class="container">
      <h3 class="title">{{ $t('events.title') }}</h3>
      <div class="event-list">
        <EventCard
          v-for="(event, index) in eventsList"
          :key="index"
          :event="event"
        />
      </div>
    </div>
    <router-link class="link" to="/events">{{
      $t('events.showMore')
    }}</router-link>
  </div>
</template>

<script>
import eventsCollection from '../content/events'
import EventCard from './EventCard.vue'

export default {
  components: { EventCard },
  data() {
    return {
      eventsList: [],
    }
  },
  async created() {
    const events = await eventsCollection()
    
    this.eventsList = events.filter(event => new Date(event.date) > new Date())
    this.eventsList = this.eventsList.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
      //.filter((show) => new Date(show.date) >= new Date())
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-bottom: 2rem;
}
.events .container {
  max-width: var(--app-max-width);
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.container .title {
  font-family: 'Changa', sans-serif;
  font-weight: normal;
  font-size: 48px;
  color: #ffff;
  text-align: center;
}
h3 {
  text-align: left;
  font-size: var(--font-03);
}
.link {
  text-decoration: underline;
  margin-top: 3rem;
}
.event-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.event-card {
  margin: 1rem;
}
@media (max-width: 750px) {
  .container {
    padding: 0;
  }
  .container .title {
    text-align: center;
  }
  .event-list {
    justify-content: center;
  }
}
</style>