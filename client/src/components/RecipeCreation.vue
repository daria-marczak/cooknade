<template>
  <v-container fluid grid-list-md pa-2>
    <h2>Create new recipe</h2>
    <v-form>
      <v-text-field
        label="Recipe title"
        type="text"
        v-model="form.title"
        v-bind:rules="rules.title"
        validate-on-blur
      />
      <v-text-field
        label="Categories"
        type="text"
        v-model="form.categories"
        v-bind:rules="rules.categories"
        validate-on-blur
        hint="Use maximum of 3 categories"
      />
      <v-text-field
        label="Description"
        type="text"
        v-model="form.description"
        v-bind:rules="rules.description"
        validate-on-blur
      />
      <v-textarea v-model="form.ingredients" v-bind:rules="rules.ingredients">
        <div slot="label">Ingredient list</div>
      </v-textarea>
      <v-slider
        color="secondary"
        label="Time of preparation"
        hint="Measured in minutes"
        v-bind:rules="rules.time"
        min="1"
        max="180"
        v-model="form.time"
        thumb-label
      ></v-slider>
      <v-textarea v-model="form.preparation" v-bind:rules="rules.preparation">
        <div slot="label">Preparation</div>
      </v-textarea>
      <v-text-field
        label="Source name"
        type="text"
        v-model="form.sourceName"
        v-bind:rules="rules.sourceName"
        validate-on-blur
      />
      <v-text-field
        label="Source URL"
        type="text"
        v-model="form.sourceUrl"
        v-bind:rules="rules.sourceUrl"
        hint="Give both source name as well as URL"
        validate-on-blur
      />
      <v-text-field
        label="URL for image"
        type="text"
        v-model="form.image"
        v-bind:rules="rules.image"
        hint="Insert direct URL for photo you want to see on your recipe"
        validate-on-blur
      />
      <v-btn :disabled="!formIsValid" flat color="secondary" type="submit">Submit</v-btn>
    </v-form>
  </v-container>
</template>


<script>
import { mapActions } from "vuex";

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
        categories: [value => value.length > 10 || "Categories are useful"],
        time: [value => value !== 0 || "Cooking takes time!"],
        preparation: [
          value => value.length > 150 || "People should know how to prepare it!"
        ],
        ingredients: [
          value => value.length > 50 || "You can make a meal out of nothing"
        ],
        sourceName: [value => value.length > 5 || "Sources are needed"],
        sourceUrl: [value => value.length > 15 || "Links are useful too"],
        image: [value => value.length > 60 || "Others want to see the meal"]
      },
      initialState
    };
  },
  methods: mapActions([""]),
  computed: {
    formIsValid() {}
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

v-text-field {
  margin-top: 2em;
}
</style>