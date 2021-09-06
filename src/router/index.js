import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Detail from '../views/detail.vue'

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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
