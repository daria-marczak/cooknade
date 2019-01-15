import Vue from 'vue';
import Vuex from 'vuex';

import { initialState } from './initialState.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recipes: initialState,
		categories: [],
	},
	actions: {},
	mutations: {
		getCategories() {
			const recipeCategories = this.state.recipes.map(recipe => recipe.category);
			this.state.categories = [...new Set(recipeCategories)];
		},
	},
	getters: {
		recipes: state => state.recipes,
		categories: state => state.categories,
	},
});

export default store;
