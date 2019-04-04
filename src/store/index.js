import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 是否是开发环境
const isDev = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  getters,
  actions,
  state,
  mutations,
  // 如果是开发环境，开启严格模式
  strict: isDev
})

export default store
