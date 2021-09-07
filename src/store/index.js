import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:'热门'
  },
  mutations: {
    changetype(state,newtype){
      state.type=newtype
    }
  },
  actions: {
  },
  modules: {
  }
})
