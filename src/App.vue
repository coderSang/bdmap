<template>
  <div id="main-content">
    <top-bar></top-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
  import BdMap from './views/map/myMapChild/BdMap'
  import test from './views/test'
  import TopBar from "./components/content/topbar/TopBar";
  export default {
    name: "App",
    components: {
      BdMap,
      TopBar,
      test
    }
  };
</script>

<style>
  @import "assets/css/base.css";
</style>
