<template>
    <v-card max-width="200px" class="card">
      <v-img v-bind:src="image" aspect-ratio="1" height="100px"></v-img>
      <v-card-title>
        <h2>{{title}}</h2>
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['image', 'title']
}
</script>

<style scoped>
  h2 {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 12px;
  }

  .card {
    margin-right: 8px;
  }
</style>