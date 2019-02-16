import axios from 'axios';

const state = {
	favorites: [],
};

const actions = {
	addToFavorites: ({ commit }, payload) => {
		const url = `http://localhost:4000/user/${payload.userId}/favorites`;

		axios
			.put(url, { recipeId: payload.recipeId })
			.then(res => res)
			.catch(error => console.error(error));
	},
};

const mutations = {};

const getters = {};

export default { state, actions, mutations, getters };
