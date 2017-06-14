import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/list'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/list',
    	name:'List',
    	component:List
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
