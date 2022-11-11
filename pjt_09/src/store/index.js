import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [
  //   createPersistedState(),
  // ],
  state: {
    movieData: null,
    watchList:[]
  },
  getters: {
  },
  mutations: {
    GET_DATA(state,data){
      state.movieData = data
    },
    ADD_WATCH_LIST(state, data) {
      state.watchList.push(data)
    },
    UPDATE_STATUS(state, data) {
      state.watchList = state.watchList.map((movie) => {
        if (movie === data) {
          movie.isCompleted = !movie.isCompleted
        }
        return movie
      })

    }
  },
  actions: {
  },
  modules: {
  }
})
