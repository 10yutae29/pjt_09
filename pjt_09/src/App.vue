<template>
  <div id="app">
    <nav class="row justify-content-between">
      <div class="col-4">
        <img id='logo' src="https://banner2.cleanpng.com/20180422/pqw/kisspng-photographic-film-movie-icons-cinema-clapperboard-5adc6cb00e9939.5609916715243951840598.jpg" alt="">
      </div>
      <div class="col-4 my-auto">
        <router-link to="/movies" class="text-decoration-none col-3 mx-3">MOVIE</router-link> 
        <router-link to="/random" class="text-decoration-none col-3 mx-3">Random</router-link> 
        <router-link to="/watch-list" class="text-decoration-none col-3 mx-3">WatchList</router-link>
      </div>
    </nav>
    <router-view/>

  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = process.env.VUE_APP_MOVIE_API
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?`
const params = {
  api_key: API_KEY,
  language: 'ko-KR',
}    


export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      movieData: null,
    }
  },
  methods: {     
    },
  created() {
    axios({
      methods: 'get',
      url: API_URL,
      params: params,
    })
      .then((response) => {
        console.log(response)
        this.$store.commit("GET_DATA", response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  /* padding: 30px; */
  height:max-content;
  background-color: lightcyan;
}

nav a {
  font-size: 30px;
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#logo {
  width: 80px;
  height: 80px;
}
</style>
