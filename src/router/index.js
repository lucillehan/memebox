import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Goods from '@/components/Goods'
import Search from '@/components/Search'
import Home from '@/components/Home'
import HomeSearch from '@/components/HomeSearch.vue'
import Cart from '@/components/Cart'

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
    	path:'/list',
    	name:'List',
    	component:List,
      beforeEnter: (to, from, next) => {
        document.getElementsByTagName("html")[0].style.fontSize = '20px'
        next();
        
      }
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
      path:'/Cart',
      name:'Cart',
      component:Cart,
      beforeEnter: (to, from, next) => {

        document.getElementsByTagName("html")[0].style.fontSize = '100px'
        next();
        
      }
    }   
  ]
})
