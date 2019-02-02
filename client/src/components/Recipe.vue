<template>
  <div>{{recipe}}</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Recipe",
  methods: mapActions(["getSingleRecipe"]),
  computed: mapGetters(["recipe"]),
  created() {
    const { recipeId } = this.$route.params;
    console.log(recipeId);
    this.getSingleRecipe(recipeId);
  }
};
</script>

<style scoped>
* {
  background: pink;
}
</style>
