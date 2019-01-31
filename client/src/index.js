import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import store from '../src/store/store';
import App from './App.vue';
import Recipe from './components/Recipe';

Vue.use(Vuetify, {
	theme: {
		primary: '#333',
		secondary: '#fb3453',
		dark: 'fb3453',
	},
});

Vue.use(Router);

const routes = [{ path: '/', component: App }, { path: '/recipe', component: Recipe }];

export const router = new Router({
	routes,
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
