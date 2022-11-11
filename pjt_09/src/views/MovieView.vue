<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <MovieCard
    v-for="(movie, id) in movies"
    :key="`movie${id}`"
    :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  computed: {
    movies() {
      // console.log(this.$store.state.movieData)
      return this.$store.state.movieData
    }
  }
}
</script>

<style>

</style>