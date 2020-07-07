import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login')
  },
  {
    path: '/CriarConta',
    name: 'CriarConta',
    component: () => import(/* webpackChunkName: "criarConta" */ '../components/CriarConta')
  }
]

const router = new VueRouter({
  routes
})

export default router
