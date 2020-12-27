import Vue from 'vue'
import VueRouter from 'vue-router'

import MoviesList from '../components/MoviesList'
import MoviePage from '../components/MoviePage'

Vue.use(VueRouter);

let router = new VueRouter({ 
	routes: [
		{
			path: '/movies',
			name: 'movies',
			component: MoviesList,
		},
		{
			path: '/movie/:id',
			name: 'movie',
			component: MoviePage,
			props: true,
		},
	]
});

export default router;
