<template>
  <div 
  @click="completed" 
  :class="{ 'is-completed': this.movie.isCompleted }"
  >
    {{ movie.title }}
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    movie: Object,
  },
  methods: {
    completed() {
      this.$store.commit('UPDATE_STATUS', this.movie)
    
    }
  }
}
</script>

<style>
.is-completed {
  text-decoration-line: line-through;
  color: darkgray;
}

</style>