import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import store from '../src/store/store';
import App from './App.vue';

Vue.use(Vuetify);

new Vue({
	render: h => h(App),
	store,
}).$mount('#app');
