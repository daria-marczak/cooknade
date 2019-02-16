import axios from 'axios';

const state = {
	isLoggedIn: null,
	userId: '',
	userName: '',
};

const url = '/auth/current_user';

const actions = {
	finishAuth: ({ commit }) => {
		commit('authenticate');
	},
};

const mutations = {
	authenticate: ({ commit }) => {
		axios.get(url).then(response => {
			console.log(response.data);
			state.userId = response.data._id;
			state.userName = response.data.name;
		});
	},
};

const getters = {
	isLoggedIn: state => !!state.userId,
	userId: state => state.userId,
	userName: state => state.userName,
};

export default { state, actions, mutations, getters };
