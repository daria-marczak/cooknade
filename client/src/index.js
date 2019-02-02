import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import store from '../src/store/store';
import App from './App.vue';
import Home from './components/Home.vue';
import Recipe from './components/Recipe.vue';

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
	routes: [{ path: '/', name: 'Home', component: Home }, { path: '/recipe', name: 'Recipe', component: Recipe }],
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
