<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from 'components/m-header'
export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>
<style lang="sass" scoped>
@import '~common/sass/variable'

#app
  color: $color-theme
  width: 100%
  max-width: 640px
  min-width: 320px
  margin: 0 auto
  background-color: $color-background
</style>
