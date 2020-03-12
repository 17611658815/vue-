// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import store from '../../store/index'
import router from '../../router/pc/index'
// api请求
import {Api} from '../../api/Api.js'

import Util from '../../utils/util.js';

//挂在全局(请求)
Vue.prototype.$Api = Api;
Vue.prototype.$util = Util;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
