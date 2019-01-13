<template>
  <div>{{recipes}} </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CardList',
  computed: {
    ...mapGetters(['recipes'])
  }
}
</script>

<style scoped>

</style>

