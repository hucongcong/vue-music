<template>
  <div class="m-header">
    <i class="icon"></i>
    <h1 class="text">CC音乐</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~common/sass/variable';
@import '~common/sass/mixin';
.m-header {
  position: relative;
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    width: 30px;
    height: 32px;
    margin-top: 6px;
    margin-right: 10px;
    // background-color: pink;
    vertical-align: top;
    // 设置背景图
    @include bg-image('logo');
    background-size: 30px 32px;
  }

  .text {
    display: inline-block;
    line-height: 44px;
    font-size: $font-size-large;
    vertical-align: top;
  }
}
</style>
