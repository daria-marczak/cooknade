<template>
  <v-container fluid grid-list-md pa-2>
    <h1>{{userName}}</h1>
    <div class="recipes">
      <h2>Your recipes</h2>
      <RecipeCard
        class="card"
        v-for="recipe in userRecipes"
        v-bind:key="recipe._id"
        v-bind:recipe="recipe"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RecipeCard from "../common/RecipeCard";

export default {
  name: "Profile",
  components: {
    RecipeCard
  },
  methods: mapActions(["getAuthoredRecipes"]),
  computed: mapGetters(["userName", "userRecipes", "userId"]),
  created() {
    this.getAuthoredRecipes(this.userId);
  }
};
</script>

<style scoped>
h1 {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 2em;
  color: #fb3453;
}
</style>