import Vue from 'vue';
import Vuex from 'vuex';

import apiService from '../api/apiService';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recipes: [],
		categories: [],
	},
	actions: {
		getRecipes() {
			this.state.recipes = apiService.getRecipes();
		},
	},
	mutations: {
		getCategories() {
			// const recipeCategories = this.state.recipes.map(recipe => recipe.category);
			console.log(this.state.recipes);
			// this.state.categories = [...new Set(recipeCategories)];
		},
	},
	getters: {
		recipes: state => state.recipes,
		categories: state => state.categories,
	},
});

export default store;
