import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'

import Login from '@/components/Login'
import Register from '@/components/Register'
import User from '@/components/User'

import Goods from '@/components/Goods'
import Test from '@/components/Test'
import FindHeader from '@/components/FindHeader'
import Search from '@/components/Search'
import Home from '@/components/Home'
import HomeSearch from '@/components/HomeSearch'
import Cart from '@/components/Cart'
import ceshi1 from '@/components/ceshi1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName("html")[0].style.fontSize = '100px'
        next();
        document.getElementsByTagName("body")[0].style.background = "white"
        next();
        
      }
    },
    {
    	path:'/List',
    	name:'List',
    	component:List,
    	beforeEnter: (to, from, next) => {
        document.getElementsByTagName("html")[0].style.fontSize = '20px'
        next();
        
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      beforeEnter:(to, from, next) => {
         document.getElementsByTagName("html")[0].style.fontSize = '31.25vw'
        next();
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      beforeEnter:(to, from, next) => {
         document.getElementsByTagName("html")[0].style.fontSize = '31.25vw'
        next();
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
     {
      path:'/Goods',
      name:'Goods',
      component:Goods,
      beforeEnter: (to, from, next) => {

        document.getElementsByTagName("html")[0].style.fontSize = '20px'
        next();
        
      }

    },
    
     {
      path:'/HomeSearch',
      name:'HomeSearch',
      component:HomeSearch,
      beforeEnter: (to, from, next) => {

        document.getElementsByTagName("html")[0].style.fontSize = '20px'
        next();
        
      }
    },
    {
      path:'/Test',
      name:'Test',
      component:Test,
      beforeEnter: (to, from, next) => {

        document.getElementsByTagName("html")[0].style.fontSize = '20px'
        next()
        
      }
    },
    {
      path:'/Cart',
      name:'Cart',
      component:Cart,
      beforeEnter: (to, from, next) => {

        document.getElementsByTagName("html")[0].style.fontSize = '100px'
        next()
        
      }
    },
    {
          path:'/FindHeader',
          name:'FindHeader',
          component:FindHeader,
          beforeEnter: (to, from, next) => {

            document.getElementsByTagName("html")[0].style.fontSize = '20px'
            next()
          }
        },
        {
      path:'/User',
      name:'User',
      component:User,
      beforeEnter: (to, from, next) => {

        document.getElementsByTagName("html")[0].style.fontSize = '31.25vw'
        next()
        
      }
    },
  ]
})
