import Vue from 'vue'
import App from './App.vue'
// 导入字体图标
import 'common/sass/index.sass'
// 导入路由
import router from './router'
// 导入http
import http from './api/http'

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
