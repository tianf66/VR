// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index.js';
import axios from 'axios';

Vue.config.productionTip = false


import { Swipe, SwipeItem, Tab, Tabs, PullRefresh, Toast, Loading, Image, List   } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(PullRefresh).use(Toast).use(Loading).use(Image).use(List);

/* eslint-disable no-new */

router.beforeEach((to, from, next)=>{
	// console.log(to, from);
	// if((to.name == 'vipList' || from.name == 'vipList')) {
	// 	router.push({"name": "login", query: {"from": from.name}});
	// }
	next();
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
