// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Tabbar, TabItem, Header, Button, Search, Cell, Navbar} from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "../static/iconfont.css"

Vue.config.productionTip = false

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);	
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Cell.name, Cell);

Vue.use(VueAxios, axios)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,Swipe, SwipeItem,Tabbar, Navbar, TabItem,Header,Button,Search,Cell}
})
