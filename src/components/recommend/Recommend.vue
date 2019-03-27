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
  },
  data() {
    return {
      swiperList: []
    }
  },
  methods: {
    async _getSwiperData() {
      let { code, data } = await this.$http.get('/recommend/swiper')
      if (code === 0) {
        this.swiperList = data.slider
      }
    }
  }
}
</script>

<style>
</style>
