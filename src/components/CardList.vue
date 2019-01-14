<template>
  <Flickity ref="flickity" v-bind:options="flickityOptions">
    <Card
      v-for="recipe in recipes"
      v-bind:key="recipe.recipeId"
      v-bind:image="recipe.imgUrl"
      v-bind:title="recipe.title"
      class="carousel-cell"
    />
  </Flickity>
</template>

<script>
import { mapGetters } from "vuex";
import Flickity from "vue-flickity";

import Card from "../common/Card";

export default {
  name: "CardList",
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: true,
        cellAlign: "left",
        wrapAround: false
      }
    };
  },
  components: {
    Card,
    Flickity
  },
  computed: {
    ...mapGetters(["recipes"])
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  }
};
</script>

<style scoped>
.carousel-cell {
  width: 50%;
}
</style>

