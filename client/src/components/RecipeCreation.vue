<template>
  <v-container fluid grid-list-md pa-2>
    <h2>{{header}}</h2>
    <v-form>
      <v-text-field
        label="Recipe title"
        type="text"
        v-bind:value="verifyRoute(form.title, recipe.title)"
        v-bind:rules="rules.title"
        validate-on-blur
      />
      <v-text-field
        label="Categories"
        type="text"
        v-bind:value="verifyRoute(form.categories, recipe.category)"
        v-bind:rules="rules.categories"
        validate-on-blur
        hint="Use maximum of 3 categories"
      />
      <v-text-field
        label="Description"
        type="text"
        v-bind:value="verifyRoute(form.description, recipe.description)"
        v-bind:rules="rules.description"
        validate-on-blur
      />
      <v-textarea
        v-bind:value="verifyRoute(form.ingredients, recipe.ingredients)"
        v-bind:rules="rules.ingredients"
      >
        <div slot="label">Ingredient list</div>
      </v-textarea>
      <v-slider
        color="secondary"
        label="Time of preparation"
        hint="Measured in minutes"
        v-bind:value="verifyRoute(form.time, time)"
        v-bind:rules="rules.time"
        min="1"
        max="180"
        thumb-label
      ></v-slider>
      <v-textarea
        v-bind:value="verifyRoute(form.preparation, recipe.preparation)"
        v-bind:rules="rules.preparation"
      >
        <div slot="label">Preparation</div>
      </v-textarea>
      <v-text-field
        label="Source name"
        type="text"
        v-bind:value="verifyRoute(form.sourceName, recipe.sourceName)"
        v-bind:rules="rules.sourceName"
        validate-on-blur
      />
      <v-text-field
        label="Source URL"
        type="text"
        v-bind:rules="rules.sourceUrl"
        v-bind:value="verifyRoute(form.sourceUrl, recipe.sourceUrl)"
        validate-on-blur
      />
      <v-text-field
        label="URL for image"
        type="text"
        v-bind:rules="rules.image"
        v-bind:value="verifyRoute(form.image, recipe.imgUrl)"
        hint="Insert direct URL for photo you want to see on your recipe"
        validate-on-blur
      />
      <v-btn
        color="secondary"
        class="submitButton"
        v-bind:disabled="!isFormValid"
        type="submit"
        v-on:click.prevent="submit"
      >Submit</v-btn>
    </v-form>
  </v-container>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "RecipeCreation",
  data() {
    const initialState = Object.freeze({
      title: "",
      description: "",
      categories: "",
      preparation: "",
      ingredients: "",
      time: 0,
      sourceName: "",
      sourceUrl: "",
      image: ""
    });

    return {
      form: Object.assign({}, initialState),
      rules: {
        title: [value => value.length > 10 || "We need a title!"],
        description: [
          value =>
            value.length > 10 ||
            "You probably want to let others know what's so great about this recipe"
        ],
        categories: [value => value.length > 5 || "Categories are useful"],
        time: [value => value !== 0 || "Cooking takes time!"],
        preparation: [
          value => value.length > 150 || "People should know how to prepare it!"
        ],
        ingredients: [
          value => value.length > 50 || "You can make a meal out of nothing"
        ],
        sourceName: [value => value.length > 5 || "Sources are needed"],
        sourceUrl: [
          value =>
            !!value.match("(http[s]?://)?([^/s]+/)(.*)") ||
            "Links are useful too"
        ],
        image: [
          value =>
            !!value.match("(http[s]?://)?([^/s]+/)(.*)") ||
            "Others want to see the meal"
        ]
      },
      initialState
    };
  },
  methods: {
    submit() {
      const { recipeId } = this.$route.params;

      const data = {
        category:
          this.form.categories === ""
            ? this.recipe.category
            : this.form.categories.split(","),
        ingredients:
          this.form.ingredients === ""
            ? this.recipe.ingredients
            : this.form.ingredients.split("\n"),
        author: this.userId || this.recipe.author,
        title: this.form.title || this.recipe.title,
        imgUrl: this.form.image || this.recipe.imgUrl,
        description: this.form.description || this.recipe.description,
        timeOfPreparation:
          this.form.time.toString().concat(" min") ||
          this.recipe.timeOfPreparation,
        preparation: this.form.preparation || this.recipe.preparation,
        sourceName: this.form.sourceName || this.recipe.sourceName,
        sourceUrl: this.form.sourceUrl || this.recipe.sourceUrl,
        recipeId
      };

      this.$route.name === "RecipeEdit"
        ? this.editRecipe(data, this.recipeId)
        : this.addRecipe(data);
    },
    verifyRoute(form, recipe) {
      return this.$route.name === "RecipeEdit" ? recipe : form;
    },
    ...mapActions(["addRecipe", "getSingleRecipe", "editRecipe"])
  },
  computed: {
    isFormValid() {
      return (
        (this.form.title || this.recipe.title) &&
        (this.form.description || this.recipe.description) &&
        (this.form.categories || this.recipe.category) &&
        (this.form.time || this.recipe.timeOfPreparation) &&
        (this.form.preparation || this.recipe.preparation) &&
        (this.form.ingredients || this.recipe.ingredients) &&
        (this.form.sourceName || this.recipe.sourceName) &&
        (this.form.sourceUrl || this.recipe.sourceUrl) &&
        (this.form.image || this.recipe.imgUrl)
      );
    },
    header() {
      return this.$route.name === "RecipeEdit"
        ? "Edit recipe"
        : "Create new recipe";
    },
    time() {
      if (this.recipe.timeOfPreparation) {
        return parseInt(this.recipe.timeOfPreparation.slice(0, -4));
      }
    },
    ...mapGetters(["userId", "recipe"])
  },
  created() {
    const { recipeId } = this.$route.params;
    this.getSingleRecipe(recipeId);
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

.submitButton {
  margin-bottom: 2em;
}
</style>
