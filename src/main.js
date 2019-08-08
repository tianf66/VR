// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index.js';
import axios from 'axios';
import storage from './utils/storage.js';

Vue.config.productionTip = false


import { Swipe, SwipeItem, Tab, Tabs, PullRefresh, Toast, Loading, Image, List, ImagePreview, Notify, Popup  } from 'vant';
Vue.use(Swipe).
use(SwipeItem).
use(Tab).
use(Tabs).
use(PullRefresh).
use(Toast).
use(Loading).
use(Image).
use(List).
use(ImagePreview).
use(Notify).
use(Popup);

/* eslint-disable no-new */

router.beforeEach((to, from, next)=>{
	// console.log(to, from);
	let userInfo = storage.get('user');
	let query = to.query;
	if(to.name == 'memberCentre' && !userInfo) {
		router.push({"name": "login", query: {...query, first: to.name}});
	} else {
		//
	}
	if(userInfo) {
		store.commit({
	        type: 'SERUSERVIP',
	        payload: {
	        	isVip: userInfo.isVip
	        }
	    });
	}
	next();
});

// axios.interceptors.request.use(
//   config => {
//   	let token = storage.get('user').token;
//   	console.log(token);
//     if (token) {
//       config.headers.token = token;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
