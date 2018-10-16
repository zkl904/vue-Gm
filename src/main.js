// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/stylus/common.styl'
import '@/assets/reset.css'
import '@/assets/common.css'
import '@/assets/iconfont/iconfont.css'
import 'mint-ui/lib/style.css'

import filters from '@/filters'
Vue.prototype.$filter = filters

import store from '@/store'
Vue.prototype.$store = store

// global filter
for (let key in filters) {
  Vue.filter(key, filters[key])
}

// cookieStore
import cookieStore from '@/assets/cookie'
window.cookieStore = cookieStore



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
