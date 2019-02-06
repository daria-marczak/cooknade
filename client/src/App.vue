<template>
  <v-app class="app">
    <v-container fluid grid-list-md pa-2>
      <router-view :key="$route.fullPath"></router-view>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Header from "./common/Header";
import Footer from "./common/Footer";

import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Category
  },
  computed: mapGetters(["recipes", "categories"]),
  methods: mapActions(["getRecipes"]),
  created() {
    this.getRecipes();
  }
};
</script>

<style scoped>
* {
  z-index: 0;
  background: #fafafa;
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}
</style>
