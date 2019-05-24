// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http=axios
//数据库
import Bmob from 'hydrogen-js-sdk'
// 初始化
Bmob.initialize("b4c96ea6da1cb6dc7f4ba58be376b036", "19f382bf983e68e602613e8a31e03a5e");
// 挂载到全局使用
Vue.prototype.Bmob = Bmob



//Swiper轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

//js
import FastClick from 'fastclick'
FastClick.attach(document.body);

//css  必须加后缀名，否则找不到对应文件
import './assets/css/reset.css'
import './assets/css/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
