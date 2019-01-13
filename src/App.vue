<template>
  <v-app>
    <v-container>
      <Header/>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header';

  export default {
    name: "App",
    components: {
      Header
    }
  }
</script>

<style scoped>
  p {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 800;
    color: blue;
  }
</style>
