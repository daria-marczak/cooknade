<template>
  <router-link v-bind:to="'/recipes/' + favorite._id">
    <div class="card">
      <img v-bind:src="favorite.imgUrl" class="img">
      <div class="description">
        <h3>{{favorite.title}}</h3>
        <p>{{descriptionLength}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FavoriteCard",
  props: ["favorite"],
  computed: {
    descriptionLength() {
      if (this.favorite.description.length > 150) {
        return this.favorite.description
          .split(" ")
          .slice(0, 20)
          .join(" ")
          .concat("...");
      } else {
        return this.favorite.description;
      }
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  max-width: 90%;
  align-items: center;
}

a {
  text-decoration: none;
}

.img {
  width: 5.5em;
  height: 5.5em;
  object-fit: cover;
  margin-right: 0.5em;
  margin-bottom: 0.8em;
}

@media screen and (min-width: 881px) {
  img {
    min-width: 10em;
    min-height: 10em;
    border-radius: 25px;
  }
}
</style>
