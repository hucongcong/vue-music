<template>
  <div class="player" v-show="playList.length">
    <!-- 全屏的播放器 -->
    <div class="normal-player" v-show="fullScreen">播放器</div>
    <!-- mini的播放器 -->
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['playList', 'fullScreen'])
  }
}
</script>

<style scoped lang='scss'>
@import '~common/sass/variable';
@import '~common/sass/mixin';

.player {
  .normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: $color-background;
  }
  .mini-player {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 180;
    width: 100%;
    height: 60px;
    background: $color-highlight-background;
  }
}
</style>
