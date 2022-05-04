// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import './assets/css/global.css'  //html，body全局样式表

Vue.config.productionTip = false
Vue.use(Vant);//使用vant组件

//默认api地址
axios.defaults.baseURL = ''
Vue.prototype.$http = axios     //绑定axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
