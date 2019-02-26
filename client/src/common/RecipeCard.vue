<template>
  <router-link v-bind:to="'/recipes/' + recipe._id">
    <div class="card">
      <img v-bind:src="recipe.imgUrl" v-bind:alt="recipe.title" class="img">
      <div class="description">
        <h3>{{recipe.title}}</h3>
        <p>{{descriptionLength}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RecipeCard",
  props: ["recipe"],
  computed: {
    descriptionLength() {
      if (this.recipe.description.length > 150) {
        return this.recipe.description
          .split(" ")
          .slice(0, 20)
          .join(" ")
          .concat("...");
      } else {
        return this.recipe.description;
      }
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  max-width: 100%;
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

  .card {
    align-items: flex-start;
  }
}
</style>
