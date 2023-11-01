<template>
  <a target="_blank" :href="event.link" class="actions">
    <div @click="shareEvent()" class="shareButton">
      <ShareIcon color="white" width="30" />
    </div>
    <div
      class="event-card"
    > 
      <img class="event-card_image" :src="event.poster" alt="">
      <div class="info">
        <h3 class="info__title">{{ event.title }}</h3>
        <h4 class="info__role">- {{ event.role }} -</h4>
        <p class="info__date">
          {{ event.location }} |
          {{ new Date(event.date).toLocaleString() }}
        </p>
        <div class="extra-info">
          <p v-if="event.resume" class="resume">{{ event.resume }}</p>
        </div>
      </div>
      <SocialMediaContainer
        v-if="showShareModal"
        v-on:close="closeModal()"
        :url="event.link"
      />
    </div>
  </a>
</template>
<script>
import SocialMediaContainer from './SocialMediaContainer.vue'
import ShareIcon from './ShareIcon.vue'
export default {
  props: ['event'],
  components: { SocialMediaContainer, ShareIcon },
  data() {
    return {
      showShareModal: false,
      dateOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    }
  },
  methods: {
    shareEvent() {
      if (navigator.share) {
        const shareData = {
          title: this.event.title,
          text: '',
          url: this.event.link,
        }
        navigator.share(shareData)
      } else {
        this.showShareModal = true
      }
    },
    closeModal() {
      this.showShareModal = false
    },
  },
}
</script>
<style scoped>
.event-card {
  width: 340px;
  margin-bottom: 2rem;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  transition: all 0.4s linear;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
}
.event-card_image {
  width: 100%;
  object-fit: cover;
}
.event-card:hover {
  outline: 1px solid rgb(255, 255, 255);
}
.extra-info {
  padding: 1rem;
  padding-top: 0;
}
.resume {
  font-size: 14px;
  opacity: 0.8;
  word-spacing: 2px;
  padding: 1rem 0;
  padding-bottom: 2rem;
}
.extra-info a {
  border: 1px solid;
  padding: 1rem;
}
.info {
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: rgb(255, 255, 255);
}
.info__date {
  text-align: center;
}
.info__title {
  font-size: 30px;
  color: rgb(255, 255, 255);
}
.shareButton {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
