import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home';
import Channel from '@/components/views/Channel';
import Detail from '@/components/views/Detail';

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
       name: 'Channel',
       component: Channel
    },
    {
       path: '/detail',
       name: 'detail',
       component: Detail
    }
  ]
})
