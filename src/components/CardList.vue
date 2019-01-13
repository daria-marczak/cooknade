<template>
    <div class="row">
        <Card
          v-for="recipe in recipes"
          v-bind:key="recipe.recipeId"
          v-bind:image="recipe.imgUrl"
          v-bind:title="recipe.title"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Card from '../common/Card';

export default {
  name: 'CardList',
  components: {
    Card
  },
  computed: {
    ...mapGetters(['recipes'])
  }
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>

