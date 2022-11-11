<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/original${this.movie.poster_path}`" alt="movie img">
    <br>
    {{ movie.title }}
    <br>
    {{ movie.overview }}
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  methods: {
 
  },
}
</script>

<style>

</style>