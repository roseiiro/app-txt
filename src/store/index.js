import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    // SET_USER (state, payload) {
    //   state.user = payload
    // }
  },
  actions: {
    // register ({ commit }) {
    //   const config = {
    //     method: 'post',
    //     url: 'http://localhost:8010/apiV2/Socia'
    //     headers: {
    //       'apiKey': ''
    //       ''
    //     }
    //   }
    //   axios.post('').then(res => {
    //     console.log(res.data)
    //     const payload = res.data
    //     commit('SET_USER', payload)
    //   }).catch(err => {
    //     console.error(err)
    //   })
    // }
  },
  modules: {
  }
})
