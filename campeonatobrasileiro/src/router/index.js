import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Classificacao from '../views/Classificacao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/classificacao',
    name: 'Classificacao',
    component: Classificacao
  }
] 

const router = new VueRouter({
  routes
})

export default router
