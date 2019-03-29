<template>
  <div class="listview">
    <g-scroll :data="data">
      <!-- 歌手列表 -->
      <ul>
        <li v-for="group in data" :key="group.title" class="list-group">
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
    <div class="list-shortcut">
      <ul>
        <li class="item" v-for="item in shortcutList" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import GScroll from 'base/gscroll/GScroll'
export default {
  components: {
    GScroll
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    shortcutList() {
      return this.data.map(item => item.title.slice(0, 1))
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
    padding: 20px 0;
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
