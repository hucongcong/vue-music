<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back" @click="back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="{backgroundImage: `url(${bgImage})`}" ref="bgImg">
      <div class="filter"></div>
    </div>
    <!-- 背景遮罩 -->
    <div class="bg-layer" ref="layer"></div>
    <g-scroll
      :overflow="false"
      class="list"
      :probe-type="3"
      :listen-scroll="true"
      @scroll="scroll"
      ref="scroll"
    >
      <song-list :songs="songs"></song-list>
    </g-scroll>
  </div>
</template>

<script>
import GScroll from 'base/gscroll/GScroll'
import SongList from 'base/song-list/SongList'
export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this._setTop()
  },
  components: {
    GScroll,
    SongList
  },
  methods: {
    back() {
      this.$router.back()
    },
    // 设置滚动组件的top值
    _setTop() {
      this.imgHeight = this.$refs.bgImg.offsetHeight
      this.$refs.scroll.$el.style.top = this.imgHeight + 'px'
    },
    scroll(pos) {
      // 控制最大滚动距离 预留40px
      let minHeight = -this.imgHeight + 40
      let translateY = Math.max(minHeight, pos.y)
      this.$refs.layer.style.transform = `translate3d(0, ${translateY}px, 0)`
      console.log(minHeight, pos.y)
      if (pos.y <= minHeight) {
        // 超过了最小高度
        // 修改图片的层级
        this.$refs.bgImg.style.zIndex = 12
        this.$refs.bgImg.style.height = '40px'
        this.$refs.bgImg.style.paddingTop = 0
      } else {
        this.$refs.bgImg.style.zIndex = 10
        this.$refs.bgImg.style.height = 0
        this.$refs.bgImg.style.paddingTop = '70%'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~common/sass/variable';
@import '~common/sass/mixin';

.music-list {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $color-background;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 40;
    width: 80%;
    text-align: center;
    line-height: 40px;
    font-size: $font-size-large;
    color: $color-text;
    @include no_wrap();
  }
  .bg-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    transform-origin: top;
    background-size: cover;
    z-index: 9;
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(7, 17, 27, 0.4);
    }
  }
  .bg-layer {
    position: relative;
    height: 100%;
    background: $color-background;
    z-index: 10;
  }
  .list {
    z-index: 11;
  }
}
</style>
