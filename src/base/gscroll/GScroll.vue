<template>
  <div ref="wrapper" class="g-scroll scroll-wrapper">
    <div class="scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array
    }
  },
  mounted() {
    this._initScroll()
  },
  methods: {
    _initScroll() {
      this.$scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    },
    refresh() {
      this.$scroll && this.$scroll.refresh()
    }
  },
  watch: {
    data: {
      handler() {
        this.$scroll && this.$scroll.refresh()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .scroll {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
