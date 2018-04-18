// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy)


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

var a = 'zzxxbb'


//这里为动态导入的测试数据 生产模式下自动移除测试数据
'@mock'

// import './mock/mock'

// import axios from 'axios'
// Vue.prototype.$http = axios

import "./main.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
