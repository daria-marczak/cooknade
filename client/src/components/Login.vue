<template>
  <v-container fluid grid-list-md pa-2>
    <div class="header">
      <h1>Cooknade</h1>
    </div>
    <div class="page">
      <button class="login">Sign in with Google</button>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
h1 {
  color: #fb3453;
  font-family: "Abril Fatface", cursive;
  font-size: 48px;
  font-weight: normal;
  text-align: center;
}

.page {
  display: flex;
  justify-content: center;
}

.login {
  margin-top: 50%;
  box-shadow: 0 0 20px rgb(153, 153, 153);
  background: white;
  padding: 1em;
  width: 90%;
  border-radius: 25px;
}
</style>
