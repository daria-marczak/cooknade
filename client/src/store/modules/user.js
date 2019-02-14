import axios from 'axios';

const state = {};

const actions = {
	addToFavorites: ({ commit }, ids) => {
		console.log(ids);
		commit('addToFavorites', userId, recipeId);
	},
};

const mutations = {
	addToFavorites: (userId, recipeId) => {
		console.log(userId, recipeId);
	},
};

const getters = {};

export default { state, actions, mutations, getters };
