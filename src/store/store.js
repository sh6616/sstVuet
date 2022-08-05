import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  getters: {},
  mutations: {
    SET_COLLAPSE(state){
      console.log(11111)
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
})