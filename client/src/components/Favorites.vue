<template>
  <div class="noFavorites" v-if="userFavorites.length === 0">Favorites</div>
  <div class="container" v-else>
    <div class="card" v-for="favorite in userFavorites" v-bind:key="favorite">{{favorite}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Favorites",
  computed: mapGetters(["favs", "userFavorites", "favorites", "userId"]),
  methods: mapActions(["fillFavorites", "getFavorites"]),
  mounted() {
    this.getFavorites(this.userId);
  },
  created() {
    console.log(this.favs);
    return (
      this.favs &&
      this.favs.forEach(favoriteId => {
        console.log(favoriteId);
        this.fillFavorites(favoriteId);
      })
    );
  }
};
</script>

<style scoped>
</style>
