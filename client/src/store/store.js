import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const url = 'http://localhost:4000/api/recipes';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		recipes: [],
		categories: [],
	},
	actions: {
		getRecipes() {
			axios
				.get(url)
				.then(response => (this.state.recipes = response.data))
				.catch(error => console.error(error));
		},
	},
	getters: {
		recipes: state => state.recipes,
		categories: state => {
			const recipeCategories = [].concat(...state.recipes.map(recipe => recipe.category));
			return (state.categories = [...new Set(recipeCategories)]);
		},
	},
});

export default store;
