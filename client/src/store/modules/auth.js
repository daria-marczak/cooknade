import axios from 'axios';

const state = {
	isLoggedIn: true,
	userId: '',
};

const url = '/auth/current_user';

const actions = {
	finishAuth: () => {
		const response = axios.get(url).then(response => response);
		console.log(response);
	},
};

const mutations = {};

const getters = {
	isLoggedIn: state => state.isLoggedIn,
};

export default { state, actions, mutations, getters };
