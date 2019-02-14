import Vue from 'vue';
import Vuex from 'vuex';

import recipes from './modules/recipes';
import auth from './modules/auth';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		recipes,
		auth,
		user,
	},
});
