import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
// @表示src这个目录
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City

  }]
})
