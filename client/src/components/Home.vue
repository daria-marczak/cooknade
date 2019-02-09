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
    ...mapGetters(["recipes", "categories", "isLoggedIn"])
  },
  methods: {
    ...mapActions(["getRecipes"])
  },
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
