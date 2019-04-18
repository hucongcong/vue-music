<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div
        class="progress-btn-wrapper"
        ref="progressBtn"
        @touchstart.prevent="touchStart"
        @touchmove.prevent="touchMove"
        @touchend="touchEnd"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
const progressBtnWidth = 16
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  created() {
    this.touch = {}
  },
  methods: {
    touchStart(e) {
      this.touch.isInit = true
      this.touch.startX = e.touches[0].pageX
      // 已经偏移的距离
      this.touch.left = this.$refs.progress.clientWidth
    },
    touchMove(e) {
      if (!this.touch.isInit) return
      // 移动距离
      let deltaX = e.touches[0].pageX - this.touch.startX
      // 限制移动范围
      // 最小不能为0
      deltaX = Math.max(0, deltaX + this.touch.left)
      // 最大不能超过最大值
      deltaX = Math.min(
        deltaX,
        this.$refs.progressBar.offsetWidth - progressBtnWidth
      )
      this._setOffset(deltaX)
    },
    touchEnd(e) {
      this.touch.isInit = false
      this._emitPercentChange()
    },
    progressClick(e) {
      this._setOffset(e.offsetX)
      this._emitPercentChange()
    },
    // 设置进度条的宽度和小球的偏移
    _setOffset(offsetWidth) {
      this.$refs.progress.style.width = offsetWidth + 'px'
      this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
    },
    _emitPercentChange() {
      // 把当前的percent传递给父组件
      const barWidth = this.$refs.progressBar.offsetWidth - progressBtnWidth
      const percent = this.$refs.progress.offsetWidth / barWidth
      this.$emit('percentChange', percent)
    }
  },
  watch: {
    percent(newValue) {
      if (newValue >= 0 && !this.touch.isInit) {
        // 计算宽度
        const barWidth = this.$refs.progressBar.offsetWidth - progressBtnWidth
        const offsetWidth = newValue * barWidth
        this._setOffset(offsetWidth)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~common/sass/variable';
.progress-bar {
  height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    .progress {
      position: absolute;
      height: 100%;
      background: $color-theme;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid $color-text;
        border-radius: 50%;
        background: $color-theme;
      }
    }
  }
}
</style>
