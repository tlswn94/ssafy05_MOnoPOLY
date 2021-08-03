/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import VueKakaSdk from 'vue-kakao-sdk'

// router setup
import router from './routes/router';

import store from './store'
// plugin setup
Vue.use(DashboardPlugin);
const apiKey = "08337197f41a5da206b7c7289678d588"
Vue.use(VueKakaSdk,{apiKey})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),

  router
});
