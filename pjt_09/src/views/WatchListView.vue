<template>
  <div>
    <h1>보고싶은 영화</h1>
    <input type="text" v-model="movieTitle">
    <button @click="addWatchList">Add</button>
    <WatchListItem
    v-for="(movie, index) in watchList"
    :key="`movie-${index}`"
    :movie="movie"
    />
  </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  components: {
    WatchListItem,
  },
  data() {
    return {
      movieTitle: null,
    }
  },
  computed: {
    watchList() {
      return this.$store.state.watchList
    },
  },
  methods: {
    addWatchList() {
      const movie = {
        title: this.movieTitle,
        isCompleted: false,
      }
      this.$store.commit('ADD_WATCH_LIST', movie)
      this.movieTitle = null
    },
  }
}
</script>

<style>

</style>