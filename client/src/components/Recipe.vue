<template>
  <div>{{recipe}}</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Recipe",
  methods: mapActions(["getSingleRecipe"]),
  computed: mapGetters(["recipe"]),
  beforeMount() {
    const { recipeId } = this.$route.params;
    this.getSingleRecipe(recipeId);
  }
};
</script>

<style scoped>
* {
  background: pink;
}
</style>
