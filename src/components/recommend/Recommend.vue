<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <swiper v-if="swiperList.length">
      <div v-for="item in swiperList" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt>
        </a>
      </div>
    </swiper>

    <!-- 歌单列表 -->
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li class="item" v-for="item in playList" :key="item.id">
          <div class="icon">
            <img width="60" height="60" :src="item.imgurl" alt>
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from 'base/swiper/Swiper'
export default {
  components: {
    Swiper
  },
  created() {
    this._getSwiperData()
    this._getPlayList()
  },
  data() {
    return {
      swiperList: [],
      playList: []
    }
  },
  methods: {
    async _getSwiperData() {
      let { code, data } = await this.$http.get('/recommend/swiper')
      if (code === 0) {
        this.swiperList = data.slider
      }
    },
    async _getPlayList() {
      let { code, data } = await this.$http.get('/recommend/playlist')
      if (code === 0) {
        this.playList = data.list
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/sass/variable";

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }

    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        width: 60px;
        height: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .desc {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
