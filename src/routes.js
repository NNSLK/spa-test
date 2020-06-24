// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Users from '@/pages/Users'
import Login from '@/pages/Login'
// Routering
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})