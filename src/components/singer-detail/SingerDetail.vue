<template>
  <transition name="slide">
    <div class="singer-detail">
      <music-list :songs="songs" :bgImage="bgImage" :title="title"></music-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import Song from 'common/js/song'
import MusicList from 'components/music-list/MusicList'
export default {
  components: {
    MusicList
  },
  data() {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters(['singer']),
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    }
  },
  created() {
    this._getSingerDetail()
  },
  methods: {
    async _getSingerDetail() {
      let id = this.singer.id
      if (!id) {
        // 如果vuex中没有id值，那么从路由参数中获取即可
        this.$router.push('/singer')
      }
      // 发送ajax请求，获取歌手详情数据
      let { code, data } = await this.$http.get(`/singer/detail?id=${id}`)
      if (code === 0) {
        this.songs = this._normalizeSongList(data.list)
      }
    },
    _normalizeSongList(list) {
      return list.map(item => {
        return new Song(item.musicData)
      })
    }
  }
}
</script>

<style lang="scss">
@import '~common/sass/variable';
.singer-detail {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s;
}
.slideenter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
