<template>
  <Flickity ref="flickity" v-bind:options="flickityOptions">
    <Card
      v-for="recipe in recipes"
      v-show="recipe"
      v-bind:key="recipe._id"
      v-bind:id="recipe._id"
      v-bind:image="recipe.imgUrl"
      v-bind:alt="recipe.title"
      v-bind:title="recipe.title"
      class="carousel-cell"
    />
  </Flickity>
</template>

<script>
import Flickity from "vue-flickity";

import Card from "../common/Card";

export default {
  name: "CardList",
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        cellAlign: "left",
        wrapAround: true
      }
    };
  },
  props: ["recipes"],
  components: {
    Card,
    Flickity
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

.flickity-page-dots {
  bottom: -22px;
}

.flickity-page-dots .dot {
  height: 4px;
  width: 40px;
  margin: 0;
  border-radius: 0;
}

@media screen and (min-width: 881px) {
  .carousel-cell {
    width: 37%;
  }
}
</style>

