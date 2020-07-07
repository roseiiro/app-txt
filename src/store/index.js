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
    //     url: 'http://169.239.132.219:8010/apiV2/Socia'
    //     headers: {
    //       'apiKey': 'olmwSKaTXETReMHnBZd2X12HtOH1U8Ne'
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
