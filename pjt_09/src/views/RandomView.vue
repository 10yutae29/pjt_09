<template>
  <div class="pt-5">
    <div id="randmovie" class="mx-auto">
      <button class="btn btn-success col-12 mb-3" @click="getRandomMovie">PICK</button><br>
      <div v-if="randomMovie">
        <img :src="`https://image.tmdb.org/t/p/original${randomMovie.poster_path}`" alt="">
        <h3 class="mt-4">{{ randomMovie.title}}</h3>
      </div>
      <div v-if="!randomMovie">
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="">
        <h3 class="mt-4">{{ movie.title}}</h3>
    </div>
      
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
img {
  width: 500px;
  height: 500px;
}
#randmovie {
  width: 500px;
}

</style>