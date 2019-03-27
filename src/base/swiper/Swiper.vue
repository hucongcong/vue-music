<template>
  <div class="swiper">
    <!-- 轮播图 -->
    <div ref="container" class="swiper-container">
      <div class="swiper-wrapper" ref="wrapper">
        <slot></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// 导入swiper样式
import 'swiper/dist/css/swiper.min.css'
export default {
  props: {
    showDots: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 500
    },
    effect: {
      type: String,
      default: 'effect'
    }
  },
  methods: {
    _initSwiper() {
      let { loop, speed, autoplay, interval, showDots, effect } = this
      let options = {}
      // 是否循环播放
      if (loop) {
        options.loop = loop
      }
      // 设置滑动速度
      options.speed = speed
      // 设置动画效果
      options.effect = effect
      // 设置是否显示小圆点
      if (showDots) {
        options.pagination = {
          el: '.swiper-pagination'
        }
      }
      // 设置是否自动播放
      if (autoplay) {
        options.autoplay = {
          delay: interval,
          disableOnInteraction: false
        }
      }
      this.$swiper = new Swiper(this.$refs.container, options)
    },
    _addClass() {
      // 给div添加类名
      let sliders = this.$refs.wrapper.children
      Array.from(sliders).forEach(item => {
        item.classList.add('swiper-slide')
      })
    }
  },
  mounted() {
    this._addClass()
    this._initSwiper()
  }
}
</script>

<style lang="scss">
@import '~common/sass/variable';

.swiper {
  .swiper-container {
    .swiper-pagination-bullet {
      opacity: 0.8;
      background-color: $color-text-ll;
      &-active {
        width: 16px;
        border-radius: 4px;
      }
    }
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
