import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    hadLoginIn: true,
    isShow : true
  },
  mutations: {
    // getLogin(state){
    //   state.hadLoginIn = !state.hadLoginIn
    // },
    showCharts(state){
      state.isShow = !state.isShow
    }
  },
  actions: {
    // aUpdateInfo(context){
    //   context.commit('showCharts')
    // }
  },
  modules: {
  }
})
export default store
