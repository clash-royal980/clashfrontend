import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// event bus
export const Bus = new Vue();

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import moment from 'moment'
Vue.prototype.moment = moment

// 配置axios
import axios from 'axios';
axios.defaults.baseURL='http://127.0.0.1:3000/'
Vue.prototype.axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
