<template>
  <div class="recipe">
    <img v-bind:src="recipe.imgUrl" v-bind:alt="recipe.title">
    <v-container fluid grid-list-md pa-2 class="container">
      <div class="top">
        <div class="recipe__title">
          <div class="title">
            <h2 v-html="recipe.title"/>
            <v-icon class="edit" v-if="toggleEditButton" v-on:click="editRecipe">edit</v-icon>
          </div>
          <p>Time of preparation: {{recipe.timeOfPreparation}}</p>
        </div>
        <button
          role="button"
          aria-label="button"
          v-bind:class="[toggleClass]"
          v-on:click="toggleLike"
        >
          <v-icon class="icon">favorite_border</v-icon>
        </button>
      </div>
      <v-chip v-for="category in recipe.category" v-bind:key="category">{{category}}</v-chip>
      <p class="description" v-html="recipe.description"/>
      <div class="ingredients">
        <div
          v-for="ingredient in recipe.ingredients"
          v-bind:key="ingredient"
          class="ingredient"
        >{{ingredient}}</div>
      </div>
      <p v-html="recipe.preparation"/>
      <p class="source">
        SOURCE:
        <a v-bind:href="recipe.sourceUrl" v-html="recipe.sourceName"/>
      </p>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { store } from "../store/store";

export default {
  name: "Recipe",
  data() {
    return {
      recipeId: "",
      isFav: null
    };
  },
  methods: {
    toggleLike() {
      if (!this.isFav) {
        this.addToFavorites({ userId: this.userId, recipeId: this.recipeId });
        this.isFav = true;
      } else {
        this.deleteFavorite({ userId: this.userId, recipeId: this.recipeId });
        this.isFav = false;
      }
    },
    checkIfFavorite() {
      this.isFav =
        this.userFavorites &&
        this.userFavorites.some(recipe => recipe._id === this.recipeId);
    },
    editRecipe() {
      this.$router.push({
        name: "RecipeEdit",
        params: { recipeId: this.recipeId }
      });
    },
    ...mapActions(["getSingleRecipe", "addToFavorites", "deleteFavorite"])
  },
  computed: {
    toggleClass() {
      return this.isFav ? "active" : "inactive";
    },
    toggleEditButton() {
      return this.recipe.author && this.recipe.author === this.userId;
    },
    ...mapGetters(["recipe", "userId", "userFavorites"])
  },
  created() {
    const { recipeId } = this.$route.params;
    this.getSingleRecipe(recipeId);
    this.recipeId = recipeId;
    this.checkIfFavorite();
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

.recipe {
  margin-bottom: 5em;
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

.top {
  display: flex;
}

button {
  width: 3em;
  margin-left: auto;
  height: 3em;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in;
}

.active {
  border: 0.16em solid #fb3453;
}

.icon {
  color: #fb3453;
}

p {
  font-family: "Open Sans", serif;
  font-weight: 400;
}

.ingredients {
  border-radius: 25px;
  background: #fff;
  margin-bottom: 1em;
}

.ingredient {
  line-height: 2.2em;
  border-bottom: 0.02em solid rgb(228, 228, 228);
  padding: 0.2em 1em;
}

.ingredient::before {
  display: inline-block;
  content: "";
  border-radius: 100%;
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.5em;
  background: #fb3453;
}

.ingredient:last-child {
  border-bottom: none;
}

.source {
  color: rgb(77, 77, 77);
}

a {
  text-decoration: none;
}

.title {
  display: flex;
  align-items: center;
}

.title h2 {
  margin-right: 0.5em;
}

.edit {
  cursor: pointer;
}

@media screen and (min-width: 881px) {
  img {
    position: static;
    height: 60vh;
  }

  .container {
    position: static;
    margin-top: -0.3em;
    background: #fff;
  }
}
</style>
