<template>
  <div>
    <img v-bind:src="recipe.imgUrl">
    <v-container fluid grid-list-md pa-2 class="container">
      <h2 v-html="recipe.title"/>
      <v-chip v-for="category in recipe.category" v-bind:key="category">{{category}}</v-chip>
      <p class="description" v-html="recipe.description"/>
      <v-list class="ingredients">
        <template v-for="(ingredient, index) in recipe.ingredients" class="ingredient">
          <v-list-tile v-bind:key="ingredient">{{ingredient}}</v-list-tile>
          <v-divider v-if="index + 1 < recipe.ingredients.length" :key="index"></v-divider>
        </template>
      </v-list>
      <p v-html="recipe.preparation"/>
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

.description {
  margin-top: 0.5em;
}

p {
  font-family: "Open Sans", serif;
  font-weight: 400;
}

.ingredients {
  border-radius: 25px;
  font-size: 0.95em !important;
}

.v-list__tile {
  height: 1.5em;
}
</style>
