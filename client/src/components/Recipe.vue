<template>
  <div>
    <img v-bind:src="recipe.imgUrl">
    <v-container fluid grid-list-md pa-2 class="container">
      <h2 v-html="recipe.title"/>
      {{recipe}}
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Recipe",
  methods: mapActions(["getSingleRecipe"]),
  computed: mapGetters(["recipe"]),
  beforeMount() {
    const { recipeId } = this.$route.params;
    this.getSingleRecipe(recipeId);
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.container {
  position: relative;
  margin-top: 50vh;
}

h2 {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 18px;
}
</style>
