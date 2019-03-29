<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
</style>
