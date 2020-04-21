// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vant from 'vant';
import '../../utils/rem.js';
import 'vant/lib/index.css';
import store from '../../store/index'
import {Api} from '../../api/Api.js'// api请求
import Util from '../../utils/util.js';
import Toast from '../../utils/toast.js';
import LogUtils from '../../utils/LogUtils.js';
import router from '../../router/mobile/index';
import { Lazyload } from "vant";
Vue.use(Lazyload)
Vue.use(Vant);
Vue.prototype.$Api = Api; //挂在全局(请求)
Vue.prototype.$util = Util;
Vue.prototype.$Toast = Toast;
Vue.prototype.$LogUtils = LogUtils;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
