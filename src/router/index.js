import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/company',
    component:()=> import('../views/company.vue')
  },
  {
    path: '/position',
    component:()=> import('../views/position.vue')
  },
  {
    path:'/login',
    component:()=> import('../views/login.vue')
  },
  {
    path:'/register',
    component:()=> import('../views/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
