import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
import Photos from './views/Photos.vue';
import Videos from './views/Videos.vue';

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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;