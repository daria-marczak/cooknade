import axios from 'axios';

const state = {
	favorites: [],
};

const actions = {
	addToFavorites: ({ commit }, ids) => {
		commit('addToFavorites', ids);
	},
};

const mutations = {
	addToFavorites: ids => {
		console.log(ids);
	},
};

const getters = {};

export default { state, actions, mutations, getters };
