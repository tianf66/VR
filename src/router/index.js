import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home';
import Channel from '@/components/views/Channel';
import Detail from '@/components/views/Detail';
import VipList from '@/components/views/VipList.vue';
import MemberCentre from '@/components/views/MyMember.vue';
import Protocol from '@/components/views/MyMember/Protocol.vue';

import Register from '@/components/user/Register.vue';
import Login from '@/components/user/Login.vue';
import Password from '@/components/user/Password.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{
  	   path: '*',
  	   redirect: `/home`,
  	},
  	{
  	   path: '/home',
  	   name: 'home',
  	   component: Home
  	},
    {
       path: '/channel',
       name: 'channel',
       component: Channel
    },
    {
       path: '/detail',
       name: 'detail',
       component: Detail
    },
    {
       path: '/vipList',
       name: 'vipList',
       component: VipList
    },
    {
       path: '/memberCentre',
       name: 'memberCentre',
       component: MemberCentre
    },
    {
       path: '/login',
       name: 'login',
       component: Login
    },
    {
       path: '/register',
       name: 'register',
       component: Register
    },
    {
       path: '/updatePassword',
       name: 'password',
       component: Password
    },
    {
      path: '/protocol',
      name: 'protocol',
      component: Protocol
    }
  ]
})
