import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:0,
    btnindex:'1'
  },
  mutations: {
    changetype(state,newtype){
      state.type=newtype
    },
    changebtnindex(state,newindex){
      state.btnindex=newindex
    }
  },
  actions: {
  },
  modules: {
  }
})
