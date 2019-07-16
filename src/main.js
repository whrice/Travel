// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
// 不同设备表现为同一个css文件
import './assets/styles/border.css'
// 一像素边框
import fastClick from 'fastclick'
// 解决移动端300ms点击延迟的问题
import './assets/styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
