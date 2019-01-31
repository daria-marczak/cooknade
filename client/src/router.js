import VueRouter from 'vue-router';
import Recipe from './components/Recipe';
import App from './App.vue';

const routes = [{ path: '/', name: 'App', component: App }, { path: '/recipe', name: 'Recipe', component: Recipe }];

export const router = new VueRouter({
	mode: 'history',
	routes,
});
