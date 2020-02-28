<template>
  <div class="my">
    <baidu-map :center="center" :zoom="zoom" @ready="handler"></baidu-map>
  </div>

</template>
<style scoped>
  .my, map {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'test',
    data () {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
      }
    }
  }
</script>
