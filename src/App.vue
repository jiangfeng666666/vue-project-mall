<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
