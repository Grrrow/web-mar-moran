import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import Photos from './views/Photos.vue'
import Videos from './views/Videos.vue'
import Music from './views/Music.vue'
import Biography from './views/Biography.vue'
import Contact from './views/Contact.vue'
import Events from './views/Events.vue'

import { useMeta } from 'vue-meta'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
  },
  {
    path: '/music',
    name: 'Music',
    component: Music,
  },
  {
    path: '/biography',
    name: 'Biography',
    component: Biography,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
