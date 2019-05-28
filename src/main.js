// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Tabs from './components/tabs'
import BackTop from './components/backtop'
import 'swiper/dist/css/swiper.css'
import './assets/font/iconfont.css'
import api from './api'
import initStore from './store'
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.use(Tabs);
Vue.use(BackTop);
Vue.prototype.$axios = Axios;
Vue.prototype.Baidu_Host = "/baidu_music_api";
Vue.prototype.$api = api;
const store = initStore();
/* eslint-disable no-new */

router.beforeEach((to,from,next) =>{
  if(to.matched.some((item)=> item.meta.isLogin)){
    let token = localStorage.getItem('token');
    store.dispatch('setTokenAction',token)
    if(token){
      next();
    }
    else{
      next({
        path:'/login'
      })
    }
  }else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
