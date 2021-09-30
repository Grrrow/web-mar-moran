<template>
  <div>
    <h1>Eventos cerrados</h1>
    <vueper-slides
      class="no-shadow"
      fixed-height="720px"
      :visible-slides="4"
      slide-multiple
      :gap="3"
      :slide-ratio="1 / 3"
      :dragging-distance="200"
      :breakpoints="{
        580: { visibleSlides: 1, slideMultiple: 2 },
        830: { visibleSlides: 2, slideMultiple: 2 },
        1100: { visibleSlides: 3, slideMultiple: 2 },
        1200: { visibleSlides: 4, slideMultiple: 2 },
      }"
    >
      <vueper-slide v-for="(show, index) in finishedEvents" :key="index">
        <template v-slot:content style="color: white; position: relative">
          <FinishedEventCard v-on:share="shareEvent(show)" :show="show" :index="index" />
        </template>
      </vueper-slide>
    </vueper-slides>
    <div class="shareModal">
      <SocialMediaContainer
        v-if="showShareModal"
        v-on:close="closeModal()"
        :url="eventLink"
      />
    </div>
  </div>
</template>

<script>
//import { eventsCollection } from '../content/firebase'
import { VueperSlides, VueperSlide } from 'vueperslides'
import SocialMediaContainer from './SocialMediaContainer.vue'
import FinishedEventCard from './FinishedEventCard.vue'
export default {
  components: { VueperSlides, VueperSlide, SocialMediaContainer, FinishedEventCard },
  data() {
    return {
      finishedEvents: [],
      showShareModal: false,
      eventLink: '',
      display: false,
    }
  },
  async created() {
  /* const events = await eventsCollection.get()
    this.finishedEvents = events
      .data()
      .eventsList.filter((e) => e.date.toDate() < new Date())
  },*/
  mounted() {
    const root = document.documentElement
    document.addEventListener('mousedown', (evt) => {
      if (this.showShareModal === false) {
        root.style.setProperty('--mouse-x', evt.pageX - 350 + 'px')
        root.style.setProperty('--mouse-y', evt.pageY + 'px')
      }
    })
  },
  methods: {
    shareEvent({ title, link }) {
      console.log(link)
      if (navigator.share) {
        const shareData = {
          title: title,
          text: 'Mi gente, se viene actuación, nos echamos un cafelito y nos vamos pa Oviedo',
          url: link,
        }
        navigator.share(shareData)
      } else {
        this.eventLink = link
        this.showShareModal = true
      }
    },
    closeModal() {
      this.showShareModal = false
    }
  },
}
</script>

<style scoped>
h1{
  color: white;
}
.shareModal {
  position: absolute;
  top: var(--mouse-y);
  left: var(--mouse-x);
  z-index: 999999;
}
</style>