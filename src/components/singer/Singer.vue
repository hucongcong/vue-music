<template>
  <div class="singer">
    <list-view @select="select" :datas="singerList"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Singer from 'common/js/singer'
import ListView from 'base/list-view/ListView'
import * as types from '@/store/mutation-type'
import { mapMutations } from 'vuex'
const HOT_NAME = '热门'
const HOT_LENGTH = 10
export default {
  components: {
    ListView
  },
  data() {
    return {
      singerList: []
    }
  },
  methods: {
    ...mapMutations({
      setSinger: types.SET_SINGER
    }),
    async _getSingerList() {
      let { code, data } = await this.$http.get('/singer/list')
      if (code === 0) {
        this.singerList = this._normalize(data.list)
      }
    },
    // 处理singer数据
    _normalize(singerList) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      singerList.forEach((item, index) => {
        // 前10条存在热门中
        if (index < HOT_LENGTH) {
          map.hot.items.push(new Singer(item))
        }
        // 判断 item.Findex在map中是否存在
        let key = item.Findex
        // 如果key在map中是第一次出现
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        // 添加数据
        map[key].items.push(new Singer(item))
      })
      // 对map处理
      let hot = [map.hot]
      let others = []
      for (let k in map) {
        if (/^[a-zA-Z]$/.test(k)) {
          others.push(map[k])
        }
      }
      others.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return [...hot, ...others]
    },
    select(item) {
      this.$router.push(`/singer/${item.id}`)
      // 给vuex中设置singer
      this.setSinger(item)
    }
  },
  created() {
    this._getSingerList()
  }
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
