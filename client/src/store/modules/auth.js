import axios from 'axios';

const state = {
	isLoggedIn: null,
	userId: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).userId : '',
	userName: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).userName : '',
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

			const user = { userId: state.userId, userName: state.userName };

			window.localStorage.setItem('userData', JSON.stringify(user));
		});
	},
};

const getters = {
	isLoggedIn: state => !!state.userId,
	userId: state => state.userId,
	userName: state => state.userName,
};

export default { state, actions, mutations, getters };
