<template>
  <div class="singer">歌手列表</div>
</template>

<script>
import Singer from 'common/js/singer'
const HOT_NAME = '热门'
const HOT_LENGTH = 10
export default {
  data() {
    return {
      singerList: []
    }
  },
  methods: {
    async _getSingerList() {
      let { code, data } = await this.$http.get('/singer/list')
      this.singerList = this._normalize(data.list)
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
      return map
    }
  },
  created() {
    this._getSingerList()
  }
}
</script>

<style>
</style>
