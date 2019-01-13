<template>
  <v-app>
    <v-container>
      <Header/>
      <CardList/>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header';
import CardList from './components/CardList';

  export default {
    name: "App",
    components: {
      Header,
      CardList
    }
  }
</script>

<style>
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
</style>
