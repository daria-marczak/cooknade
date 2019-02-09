<template>
  <div>
    <router-link to="/">
      <h1 class="header">Cooknade</h1>
    </router-link>
    <p>Find the greatest idea for breakfast, dinner or dessert. Add some of your recipes and share them with others. And most of all: enjoy being a foodie.</p>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
h1 {
  color: #fb3453;
  font-family: "Abril Fatface", cursive;
  font-size: 48px;
  font-weight: normal;
}

.header {
  background-color: #fafafa;
  position: sticky;
  z-index: 11111;
  top: 0;
}

a {
  text-decoration: none;
}

@media screen and (min-width: 881px) {
  h1 {
    font-size: 5em;
    text-align: center;
  }
}
</style>
