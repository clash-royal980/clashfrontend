import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Detail from '../views/detail.vue'
import TenKing from '../views/tenKing.vue'
import Battle from '../views/battle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/tenking',
    name: 'TenKing',
    component: TenKing
  },
  {
    path: '/battle',
    name: 'Battle',
    component: Battle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
