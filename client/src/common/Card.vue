<template>
  <div class="card">
    <v-img v-bind:src="image" aspect-ratio="1" height="100px"></v-img>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["image", "title"]
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
</style>