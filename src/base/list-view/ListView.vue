<template>
  <div class="listview">
    <g-scroll ref="scroll" :data="datas" :listenScroll="true" @scroll="scroll" :probeType="3">
      <!-- 歌手列表 -->
      <ul>
        <li ref="listGroups" v-for="group in datas" :key="group.title" class="list-group">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li class="list-group-item" v-for="item in group.items" :key="item.id">
              <img class="avatar" v-lazy="item.avatar" alt>
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </g-scroll>
    <!-- 右侧快捷导航 -->
    <div
      class="list-shortcut"
      @touchstart.stop.prevent="touchStart"
      @touchmove.stop.prevent="touchMove"
    >
      <ul>
        <li
          ref="shortcutItems"
          class="item"
          :class="{current: currentIndex === index}"
          :data-index="index"
          v-for="(item, index) in shortcutList"
          :key="item"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import GScroll from 'base/gscroll/GScroll'
// 右侧每个导航的高度
const ANCHOR_HEIGHT = 18
export default {
  data() {
    return {
      // 歌单滚动的距离
      scrollY: -1,
      // 当前显示的下标
      currentIndex: 0
    }
  },
  created() {
    this.touch = {}
    this.listHeight = []
  },
  components: {
    GScroll
  },
  props: {
    datas: {
      type: Array
    }
  },
  computed: {
    shortcutList() {
      return this.datas.map(item => item.title.slice(0, 1))
    }
  },
  methods: {
    touchStart(e) {
      let index = e.target.dataset.index
      // 获取对应的li
      let current = this.$refs.listGroups[index]
      this.$refs.scroll.scrollToElement(current, 300)

      // 记录开始值
      this.touch.y1 = e.touches[0].pageY
      // console.log(this.touch.y1)

      // 记录开始的下标
      this.touch.index = +index
    },
    touchMove(e) {
      // 获取到移动的y坐标
      this.touch.y2 = e.touches[0].pageY
      // 计算需要移动的li的个数
      let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0
      // 需要滚动到的下标
      let index = this.touch.index + delta
      // 获取到需要滚动到的元素
      let current = this.$refs.listGroups[index]
      // 滚动到该元素的位置
      this.$refs.scroll.scrollToElement(current, 300)
    },
    scroll(pos) {
      this.scrollY = pos.y
      // console.log(this.scrollY)
    },
    // 计算每个group的高度
    _caculateHeight() {
      this.listHeight = [0]
      const list = this.$refs.listGroups
      let height = 0
      for (var i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.offsetHeight
        this.listHeight.push(height)
      }
    }
  },
  // 监视data的变化
  watch: {
    datas: {
      handler() {
        // 数据发生更新，需要等待
        this.$nextTick(() => {
          this._caculateHeight()
        })
      },
      deep: true
    },
    // 监听scrollY的变化
    scrollY(newY) {
      for (let i = 0; i < this.listHeight.length; i++) {
        let h1 = this.listHeight[i]
        let h2 = this.listHeight[i + 1]
        // console.log(i)
        if (Math.abs(newY) >= h1 && Math.abs(newY) < h2) {
          this.currentIndex = i
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~common/sass/variable';

.listview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .list-group {
    padding-bottom: 30px;
    &-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    &-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }

  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 5px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;

      &.current {
        color: $color-theme;
      }
    }
  }
}
</style>
