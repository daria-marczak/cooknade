import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import store from '../src/store/store';
import App from './App.vue';
import router from './router';

Vue.use(Vuetify, {
	theme: {
		primary: '#333',
		secondary: '#fb3453',
		dark: 'fb3453',
	},
});

Vue.use(VueRouter);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
