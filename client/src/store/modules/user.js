import axios from 'axios';

const baseUrl = `http://localhost:4000/user/`;

const state = {
	favorites: [],
};

const actions = {
	addToFavorites: ({ commit }, payload) => {
		const url = `${baseUrl}${payload.userId}/favorites`;

		axios
			.put(url, { recipeId: payload.recipeId })
			.then(res => res)
			.catch(error => console.error(error));
	},
	deleteFavorite: ({ commit }, payload) => {
		const url = `${baseUrl}${payload.userId}/favorites`;
		axios
			.delete(url, { data: { recipeId: payload.recipeId } })
			.then(res => res)
			.catch(error => console.error(error));
	},
	getFavorites: ({ commit }, userId) => {
		commit('allFavorites', userId);
	},
};

const mutations = {
	allFavorites: (state, userId) => {
		const url = `${baseUrl}${userId}/favorites`;

		axios.get(url).then(res => {
			state.favorites = res.data.favorites;
		});
	},
};

const getters = {
	favs: state => state.favorites,
};

export default { state, actions, mutations, getters };
