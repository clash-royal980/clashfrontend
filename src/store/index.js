import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:0,
    islogin:sessionStorage.getItem('islogin'),  //保存是否已登录
    userphone:sessionStorage.getItem('userphone')   //保存当前用户电话 
  },
  mutations: {
    changetype(state,newtype){
      state.type=newtype;
    },
    changephone(state,newphone){
      state.islogin = true;
      state.userphone = newphone;
    },
    changelogin(state){
      state.islogin = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
