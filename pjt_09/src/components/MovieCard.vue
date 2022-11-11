<template>
  <div class="col">
    <div class="card" style="height:1000px;">
      <img :src="`https://image.tmdb.org/t/p/original${this.movie.poster_path}`" alt="movie img" style="width:auto;">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
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