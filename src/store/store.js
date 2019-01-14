import Vue from 'vue';
import Vuex from 'vuex';

import { initialState } from './initialState.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recipes: initialState,
		categories: ['dessert', 'vegetables'],
	},
	actions: {},
	mutations: {},
	getters: {
		recipes: state => state.recipes,
		categories: state => state.categories,
	},
});

export default store;
