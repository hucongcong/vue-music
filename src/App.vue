<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/MHeader'
import Tab from 'components/tab/Tab'
export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>
<style lang="sass" scoped>
@import '~common/sass/variable'

#app
  width: 100%
  max-width: 640px
  min-width: 320px
  margin: 0 auto
  height: 1000px
  background-color: $color-background
</style>
