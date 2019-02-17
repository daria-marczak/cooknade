<template>
  <div class="noFavorites" v-if="userFavorites.length === 0">
    <p>You have not added any favorites</p>
  </div>
  <div class="container" v-else>
    <FavoriteCard
      class="card"
      v-for="favorite in userFavorites"
      v-bind:key="favorite._id"
      v-bind:favorite="favorite"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import FavoriteCard from "../common/FavoriteCard";

export default {
  name: "Favorites",
  components: {
    FavoriteCard
  },
  computed: mapGetters(["favs", "userFavorites", "userId"]),
  methods: mapActions(["fillFavsIntoComponent", "getFavorites"]),
  created() {
    this.getFavorites(this.userId);
    if (this.favs && this.userFavorites.length === 0) {
      this.favs.forEach(favoriteId => {
        this.fillFavsIntoComponent(favoriteId);
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin: 2em;
}

.noFavorites {
  font-family: Raleway, sans-serif;
  font-weight: 600;
  font-size: 2em;
  margin-top: 50%;
  text-align: center;
}
</style>
