import Vue from 'vue';
import VueRouter from 'vue-router';
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

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [{ path: '/', component: App }, { path: '/recipe', component: Recipe }],
});

new Vue({
	router,
	render: h => h(App),
	store,
}).$mount('#app');
