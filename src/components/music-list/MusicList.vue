<template>
  <div class="music-list">音乐列表组件</div>
</template>

<script>
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
  }
}
</script>

<style>
</style>
