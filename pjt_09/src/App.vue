<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/movies">MOVIE</router-link> |
        <router-link to="/random">Random</router-link> |
        <router-link to="/watch-list">WatchList</router-link>
      </div>
    </nav>
    <router-view/>
    <TheRandom/>
  </div>
</template>

<script>
import axios from 'axios'
import TheRandom from '@/components/TheRandom.vue'


const API_KEY = process.env.VUE_APP_MOVIE_API
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?`
const params = {
        api_key: API_KEY,
        language: 'ko-KR',
}    


export default {
  name: 'App',
  components: {
    TheRandom,
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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
