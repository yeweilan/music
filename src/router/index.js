import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import SongLists from '@/containers/SongLists'
import Artists from '@/containers/Artists'
import Top from '@/containers/Top'
import UCenter from '@/containers/UCenter'
import Search from '@/containers/Search'
import Play from '@/containers/Play'
import Login from '@/containers/Login'
Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/songlists',
      name: 'SongLists',
      component: SongLists
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/ucenter',
      name: 'UCenter',
      component: UCenter,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/play/:music_id',
      name: 'Play',
      component: Play,
      props:true,
      meta:{
        keepAlive:false
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
