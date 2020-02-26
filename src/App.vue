<template>
  <div id="main-content">
    <left-bar></left-bar>
  </div>
</template>


<script>
  import BdMap from './components/map/BdMap'
  import LeftBar from './views/leftbar/LeftBar'

  export default {
    name: "App",
    components: {
      BdMap,
      LeftBar
    }
  };
</script>

<style>
  @import "assets/css/base.css";
</style>
