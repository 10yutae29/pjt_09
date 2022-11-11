import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
