<template>
  <div class="category">
    <h2>{{uppercaseCategory}}</h2>
    <CardList v-bind:recipes="filterCategory"/>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardList from "./CardList";

export default {
  name: "Category",
  components: {
    CardList
  },
  props: ["category"],
  computed: {
    uppercaseCategory() {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1);
    },
    filterCategory() {
      return this.recipes.map(recipe =>
        recipe.category.includes(this.category) ? recipe : false
      );
    },
    ...mapGetters(["recipes"])
  }
};
</script>

<style scoped>
h2 {
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.category {
  margin-top: 32px;
  z-index: 0;
}

.category:last-child {
  margin-bottom: 3em;
}
</style>
