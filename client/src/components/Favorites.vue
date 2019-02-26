<template>
  <div class="noFavorites" v-if="userFavorites.length === 0">
    <p>You have not added any favorites</p>
  </div>
  <v-container fluid grid-list-md pa-2 v-else>
    <h2>Your favorites</h2>
    <RecipeCard
      class="card"
      v-for="favorite in userFavorites"
      v-bind:key="favorite._id"
      v-bind:recipe="favorite"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import RecipeCard from "../common/RecipeCard";

export default {
  name: "Favorites",
  components: {
    RecipeCard
  },
  computed: {
    ...mapGetters(["userFavorites"])
  },
  methods: mapActions(["getFavorites"]),
  created() {
    const currentIds = this.userFavorites.map(favorite => favorite._id);
  }
};
</script>

<style scoped>
h2 {
  font-family: Raleway, sans-serif;
  font-weight: 600;
  color: #fb3453;
  margin-bottom: 1em;
}

.noFavorites {
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 2em;
  margin-top: 50%;
  text-align: center;
}
</style>
