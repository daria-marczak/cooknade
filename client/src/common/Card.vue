<template>
  <router-link v-bind:to="'/recipes/' + id">
    <div class="card">
      <v-img v-bind:src="image" class="image" aspect-ratio="1"></v-img>
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

@media screen and (min-width: 881px) {
  .image {
    width: 20em;
    height: 20em;
    border-radius: 25px;
  }
}
</style>