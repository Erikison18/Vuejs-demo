// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/font'
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/loading'

Vue.config.productionTip = false
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
