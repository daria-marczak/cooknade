import axios from 'axios';

const state = {
	isLoggedIn: true,
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
			state.userId = response.data._id;
			state.userName = response.data.name;
			console.log(response);
		});
	},
};

const getters = {
	isLoggedIn: state => state.isLoggedIn,
	userId: state => state.userId,
	userName: state => state.userName,
};

export default { state, actions, mutations, getters };
