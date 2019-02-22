<template>
  <v-bottom-nav :value="true" fixed color="white">
    <router-link to="/home">
      <v-btn color="secondary" flat value="home">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
    </router-link>

    <v-btn color="secondary" flat value="calendar">
      <span>Calendar</span>
      <v-icon>calendar_today</v-icon>
    </v-btn>

    <v-btn fab flat color="secondary">
      <v-icon>add</v-icon>
    </v-btn>

    <router-link to="/favorites">
      <v-btn color="secondary" flat value="favorites">
        <span>Favorites</span>
        <v-icon>grade</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/profile">
      <v-btn color="secondary" flat value="profile">
        <span>Profile</span>
        <v-icon>person</v-icon>
      </v-btn>
    </router-link>
  </v-bottom-nav>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
v-bottom-nav {
  margin-top: 4em;
}

a {
  text-decoration: none;
}
</style>
