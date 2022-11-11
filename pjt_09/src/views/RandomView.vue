<template>
  <div>
    <button @click="getRandomMovie">PICK</button><br>
    <div v-if="randomMovie">
      <h1>{{ randomMovie.title}}</h1>
      <img :src="`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`" alt="">
    </div>
    <div v-if="!randomMovie">
      <h1>{{ movie.title}}</h1>
      <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="">
      
    </div>
  </div>
</template>

<script>
import _ from 'lodash'


export default {
  name: 'RandomView',
  data() {
    return {
      randomMovie: null
    }
  },
  computed: {
    movie() {
      return _.sample(this.$store.state.movieData)
    },
  }, 
  methods: {
    getRandomMovie() {
      const movieData = this.$store.state.movieData
      this.randomMovie = _.sample(movieData)
      // console.log(this.randomMovie)
    }
  },
}
</script>

<style>

</style>