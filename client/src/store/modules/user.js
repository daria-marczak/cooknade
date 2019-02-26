import axios from 'axios';

const baseUrl = `http://localhost:4000/user/`;
const url = 'http://localhost:4000/api/recipes';

const state = {
	favorites: [],
	userFavorites: [],
	authoredRecipes: [],
};

const actions = {
	addToFavorites: ({ commit }, payload) => {
		commit('addFavorite', payload);
	},
	deleteFavorite: ({ commit }, payload) => {
		const url = `${baseUrl}${payload.userId}/favorites`;
		axios
			.delete(url, { data: { recipeId: payload.recipeId } })
			.then(response => response)
			.catch(error => console.error(error));
		commit('allFavorites', payload.userId);
	},
	getFavorites: ({ commit }, userId) => {
		commit('allFavorites', userId);
	},
	getAuthoredRecipes: ({ commit }, userId) => {
		commit('authored', userId);
	},
};

const mutations = {
	addFavorite: (state, payload) => {
		const url = `${baseUrl}${payload.userId}/favorites`;

		axios
			.put(url, { recipeId: payload.recipeId })
			.then(response => state.userFavorites.push(response.data))
			.catch(error => console.error(error));
	},
	allFavorites: (state, userId) => {
		const url = `${baseUrl}${userId}/favorites`;

		axios.get(url).then(res => {
			state.favorites = res.data.favorites;
		});
	},
	authored: (state, userId) => {
		const url = `${baseUrl}${userId}/recipes`;

		axios.get(url).then(response => state.authoredRecipes.push(response.data.authoredRecipes));
	},
};

const getters = {
	userFavorites: state => state.favorites && state.favorites,
	userRecipes: state => state.authoredRecipes[0],
};

export default { state, actions, mutations, getters };
