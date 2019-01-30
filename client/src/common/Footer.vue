<template>
  <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
    <v-btn color="teal" flat value="home">
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="calendar">
      <span>Calendar</span>
      <v-icon>calendar_today</v-icon>
    </v-btn>

    <v-btn fab dark color="indigo">
      <v-icon>add</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="favorites">
      <span>Favorites</span>
      <v-icon>grade</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="favorites">
      <span>Profile</span>
      <v-icon>person</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
v-bottom-nav {
  margin-top: 1em;
}
</style>
