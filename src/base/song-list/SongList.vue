<template>
  <div class="song-list">
    <ul>
      <li
        @click="selectSong(song, index)"
        class="item"
        v-for="(song, index) in songs"
        :key="song.id"
      >
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{song.singer}}。{{song.album}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array
    }
  },
  methods: {
    selectSong(song, index) {
      // 给父组件传值
      this.$emit('select', song, index)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~common/sass/variable';
@import '~common/sass/mixin';
.song-list {
  padding: 20px 30px;
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: $font-size-medium;
    .rank {
      flex: 0 0 25px;
      width: 25px;
      margin-right: 30px;
      text-align: center;
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        color: $color-text;
        @include no-wrap();
      }
      .desc {
        @include no-wrap();
        margin-top: 4px;
        color: $color-text-d;
      }
    }
  }
}
</style>
