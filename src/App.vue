<template>
  <v-app>
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
import { mapGetters, mapMutations } from "vuex";

import Header from "./components/Header";
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Header,
    Category
  },
  computed: {
    ...mapGetters(["recipes", "categories"])
  },
  methods: {
    ...mapMutations(["getCategories"])
  },
  created() {
    this.getCategories();
  }
};
</script>

<style>
p {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}
</style>
