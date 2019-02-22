import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from '../src/store/store';
import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Recipe from './components/Recipe.vue';
import Favorites from './components/Favorites.vue';
import Profile from './components/Profile.vue';

import '../static/favicon.ico';

Vue.use(Vuetify, {
	theme: {
		primary: '#333',
		secondary: '#fb3453',
		dark: 'fb3453',
	},
});

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: 'Login', component: Login },
		{ path: '/home', name: 'Home', component: Home },
		{ path: '/recipes/:recipeId', name: 'Recipe', component: Recipe },
		{ path: '/favorites', name: 'Favorites', component: Favorites },
		{ path: '/profile', name: 'Profile', component: Profile },
	],
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
