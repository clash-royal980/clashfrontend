import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Detail from '../views/detail.vue'
import TenKing from '../views/tenKing.vue'
import Battle from '../views/battle.vue'
import Myguess from '../views/myguess.vue'
import Guessdetail from '../views/guessdetail.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

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
  {
    path: '/myguess',
    name: 'Myguess',
    component: Myguess
  },
  {
    path: '/guessdetail',
    name: 'Guessdetail',
    component: Guessdetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
