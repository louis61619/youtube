<template>
  <div id="app">
    <div class="router-block">
      <router-view></router-view>
    </div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped lang="scss">
  @import "assets/css/normalize.css";
  *{
    box-sizing: border-box;
  }
  .router-block {
    width: calc(100% - 200px);
    border: 1px solid red;
    margin-left: 200px;
  }
</style>
