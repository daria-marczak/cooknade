import Vue from 'vue';
import Vuex from 'vuex';

import initialState from './initialState.js';

Vue.use(Vuex);

const state = {
	recipes: initialState,
};

const actions = {};

const mutations = {};

const getters = {
	recipes: state => state.recipes,
};

export default {
	state,
	actions,
	mutations,
	getters,
};
