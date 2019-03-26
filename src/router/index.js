import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Rank from 'components/rank/Rank'
import Search from 'components/search/Search'
import Recommend from 'components/recommend/Recommend'
import Singer from 'components/singer/Singer'
Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'tab-item-active',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})

export default router
