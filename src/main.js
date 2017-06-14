// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem,Tabbar, TabItem,Header,Button,Popup} from 'mint-ui'
import 'mint-ui/lib/style.css'




Vue.config.productionTip = false

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);	
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Popup.name, Popup);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,Swipe, SwipeItem,Tabbar, TabItem,Header,Button,Popup }
})
