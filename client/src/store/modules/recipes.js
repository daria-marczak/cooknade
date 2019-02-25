import axios from 'axios';

const url = 'http://localhost:4000/api/recipes';

const state = {
	recipes: [],
	categories: [],
	recipe: {},
};

const mutations = {
	getRecipes: () => {
		axios
			.get(url)
			.then(response => (state.recipes = response.data))
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
};

const actions = {
	getRecipes: ({ commit }) => {
		commit('getRecipes');
	},
	getSingleRecipe: ({ commit }, recipeId) => {
		commit('getSingleRecipe', recipeId);
	},
	addRecipe: ({ commit }, payload) => {
		axios.post(url, payload).catch(error => console.error(error));
	},
	editRecipe: ({ commit }, payload) => {
		console.log(payload);
		axios
			.put(`${url}/${payload.recipeId}`, { payload })
			.then(response => console.log(response))
			.catch(error => console.error(error));
	},
};

const getters = {
	recipes: state => state.recipes,
	categories: state => {
		const recipeCategories = [].concat(...state.recipes.map(recipe => recipe.category));
		return (state.categories = [...new Set(recipeCategories)]);
	},
	recipe: state => state.recipe,
};

export default { state, mutations, actions, getters };
