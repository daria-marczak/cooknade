import axios from 'axios';

const url = 'http://localhost:4000/auth/google';

const state = {
	isLoggedIn: false,
};

const actions = {
	logIn() {
		const response = axios.get(url).then(response => response);

		console.log(response);
	},
};

const mutations = {};

const getters = {
	isLoggedIn: state => state.isLoggedIn,
};

export default { state, actions, mutations, getters };
