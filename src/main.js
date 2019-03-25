import Vue from 'vue'
import App from './App.vue'

// 导入字体图标
import 'common/sass/index.sass'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
