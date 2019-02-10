<template>
  <v-container fluid grid-list-md pa-2>
    <div class="desktop">
      <div class="header">
        <h1>Cooknade</h1>
      </div>
      <div class="page">
        <a class="login" href="/auth/google">Sign in with Google</a>
      </div>
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
  text-decoration: none;
  text-align: center;
  border-radius: 25px;
}

@media screen and (min-width: 880px) {
  .desktop {
    max-width: 60%;
    margin-left: 31%;
  }
}
</style>
