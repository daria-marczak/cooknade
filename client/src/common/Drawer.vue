<template>
  <div class="navigation">
    <div class="user">
      <div class="circle">
        <v-icon>person</v-icon>
      </div>
      {{userName}}
    </div>
    <div class="links">
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <router-link to="/">
        <span>Calendar</span>
      </router-link>
      <router-link to="/">
        <span>Favorites</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      userName: "daria_marczak"
    };
  }
};
</script>

<style scoped>
.navigation {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #fff;
  font-family: "Raleway", sans-serif;
  padding: 1em 1em;
}

.user {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #fb3453;
}

.circle {
  width: 2.5em;
  height: 2.5em;
  border: 0.08em solid #fb3453;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 2em;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  padding: 1em 0;
  border-bottom: 0.02em solid rgb(228, 228, 228);
  font-weight: 500;
}

a:last-child {
  border-bottom: none;
}
</style>
