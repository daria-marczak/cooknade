<template>
  <div>Je suis recipe</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Recipe",
  methods: {
    ...mapActions(["getRecipe"])
  },
  computed: {
    ...mapGetters(["recipe"])
  },
  created() {
    const { recipeId } = this.$route.params;
    this.getRecipe(recipeId);
    console.log(recipeId);
  }
};
</script>

<style scoped>
* {
  background: pink;
}
</style>
