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

Vue.http.headers.common.ApiKey = 'olmwSKaTXETReMHnBZd2X12HtOH1U8Ne'
// http.headers.common.Authorization = this.file.type.ApiKey

// this.$http.put(this.ticket.upload_link_secure, this.file).then(this.uploadSuccess, this.uploadFail)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default { Vue, namespace: true }
