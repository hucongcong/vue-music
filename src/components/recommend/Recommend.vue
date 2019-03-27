<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <div ref="container" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperList.slider" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// 导入swiper样式
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      swiperList: []
    }
  },
  created() {
    this._getSwiperData()
  },
  methods: {
    async _getSwiperData() {
      let { code, data } = await this.$http.get('/recommend/swiper')
      if (code === 0) {
        this.swiperList = data
        this.$nextTick(() => {
          this._initSwiper()
        })
      }
    },
    _initSwiper() {
      this.$swiper = new Swiper(this.$refs.container, {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  img {
    display: block;
    width: 100%;
  }
}
</style>
