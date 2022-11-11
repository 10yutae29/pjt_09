<template>
  <div class="list-group mx-auto" style="width: 80%;" >
    <div class="list-group-item">
      <h1>보고싶은 영화</h1>
      <input type="text" v-model="movieTitle">
      <span>&nbsp;</span>
      <button 
      class="btn btn-outline-primary"
      @click="addWatchList"
      >
      Add
      </button>
    </div>
    <WatchListItem
    class="list-group-item"
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