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

    <router-link to="/create">
      <button class="addNew" role="button" aria-label="button">
        <v-icon dark>add</v-icon>
      </button>
    </router-link>

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
  text-align: center;
}

.addNew {
  background: #fb3453 !important;
  width: 3.5em;
  height: 3.5em;
  border-radius: 100%;
  box-shadow: 0 0 10px #999;
}
</style>
