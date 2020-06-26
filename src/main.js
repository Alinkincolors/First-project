import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes.js';
import store from './store/store.js';
import VueResource from 'vue-resource';


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'gs://vuejs-stock-trader-d80c7.appspot.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
