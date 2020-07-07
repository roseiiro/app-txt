import Vue from 'vue'
// import axios from 'axios'
// import vueAxios from 'vue-axios'
import App from './App'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'
import './assets/sass/bootstrap.scss'

Vue.config.productionTip = false

Vue.use(vueResource)

// const http = Vue.http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default { Vue, namespace: true }
