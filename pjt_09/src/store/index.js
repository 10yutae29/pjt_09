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
  },
  getters: {
  },
  mutations: {
    GET_DATA(state,data){
      state.movieData = data
    }
  },
  actions: {
  },
  modules: {
  }
})
