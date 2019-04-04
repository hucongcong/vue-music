import Vue from 'vue'
import App from './App.vue'
// 导入字体图标
import 'common/sass/index.sass'
// 导入路由
import router from './router'
// 导入http
import http from './api/http'

// 导入vue-lazyload
import VueLazyload from 'vue-lazyload'

// 导入vuex
import store from './store'

Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
