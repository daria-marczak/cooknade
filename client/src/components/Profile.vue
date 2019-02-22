<template>
  <v-container fluid grid-list-md pa-2>
    <h1>{{userName}}</h1>
    <div class="recipes">
      <h2>Your recipes</h2>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: mapGetters(["userName"])
};
</script>

<style scoped>
h1 {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 2em;
  color: #fb3453;
}
</style>
