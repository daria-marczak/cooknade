<template>
  <v-app class="app">
    <v-container fluid grid-list-md pa-2>
      <Header/>
      <Category
        v-for="category in categories"
        v-bind:category="category"
        v-bind:key="category.index"
      />
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../common/Header";
import Category from "./Category";

export default {
  name: "Home",
  components: {
    Header,
    Category
  },
  computed: {
    ...mapGetters(["recipes", "categories", "isLoggedIn", "userId"])
  },
  methods: {
    ...mapActions(["getRecipes", "finishAuth", "getFavorites"])
  },
  created() {
    this.finishAuth();
    this.getRecipes();
    this.getFavorites(this.userId);
  }
};
</script>

<style scoped>
* {
  z-index: 0;
  background: #fafafa;
  font-size: 16px;
}

p {
  font-family: "Open Sans", sans-serif;
}
</style>
