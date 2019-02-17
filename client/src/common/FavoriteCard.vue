<template>
  <router-link v-bind:to="'/recipes/' + favorite._id">
    <div class="card">
      <img v-bind:src="favorite.imgUrl" class="img">
      <div class="description">
        <h3>{{favorite.title}}</h3>
        <p>{{favorite.description}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "FavoriteCard",
  props: ["favorite"]
};
</script>

<style scoped>
.card {
  display: flex;
  max-width: 90%;
  align-items: center;
}

a {
  text-decoration: none;
}

.img {
  width: 5.5em;
  height: 5.5em;
  object-fit: cover;
  margin-right: 0.5em;
  margin-bottom: 0.8em;
}
</style>
