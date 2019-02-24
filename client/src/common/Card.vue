<template>
  <router-link v-bind:to="'/recipes/' + id">
    <div class="card">
      <v-img v-bind:src="image" class="image" v-bind:alt="title" aspect-ratio="1"></v-img>
      <h2>{{title}}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["image", "title", "id"]
};
</script>

<style scoped>
h2 {
  font-family: "Open Sans", sans-serif !important;
  font-size: 0.8em;
  margin-top: 0.5em;
}

.card {
  margin-right: 8px;
  max-width: 250px;
}

a {
  text-decoration: none;
}

.image {
  height: 10em;
}

@media screen and (min-width: 880px) and (max-width: 1200px) {
  .image {
    width: 15em;
    height: 15em;
    border-radius: 25px;
  }
}

@media screen and (min-width: 1201px) {
  .image {
    width: 22em;
    height: 22em;
    border-radius: 25px;
  }
  h2 {
    font-size: 1em;
  }
}
</style>