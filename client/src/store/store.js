import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const url = 'http://localhost:4000/api/recipes';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recipes: [],
		categories: [],
		recipe: {},
	},
	mutations: {
		getRecipes() {
			axios
				.get(url)
				.then(response => (this.state.recipes = response.data))
				.catch(error => console.error(error));
		},
		getSingleRecipe: (state, recipeId) => {
			axios
				.get(`${url}/${recipeId}`)
				.then(response => {
					state.recipe = response.data;
				})
				.catch(error => console.error(error));
		},
	},
	actions: {
		getRecipes({ commit }) {
			commit('getRecipes');
		},
		getSingleRecipe({ commit }, recipeId) {
			commit('getSingleRecipe', recipeId);
		},
	},
	getters: {
		recipes: state => state.recipes,
		categories: state => {
			const recipeCategories = [].concat(...state.recipes.map(recipe => recipe.category));
			return (state.categories = [...new Set(recipeCategories)]);
		},
		recipe: state => state.recipe,
	},
});

export default store;
