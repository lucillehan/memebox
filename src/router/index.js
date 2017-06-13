import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Home from '@/components/Home'
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
    }
  ]
})
