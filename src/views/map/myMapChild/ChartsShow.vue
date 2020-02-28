<template>
  <div v-if="isShow">
    <div class="show-charts">
      <h2>lll</h2>
      <button @click="btnClick">dianji</button>
    </div>
  </div>

</template>
<script>
  export default {
    name: "ChartsShow",
    data() {
      return {
        isShow:this.$store.state.isShow
      };
    },
    methods: {
      btnClick() {
        this.$store.commit('showCharts')
        this.isShow = false
      }
    }
  };
</script>

<style scoped>
  .show-charts{
    width: 400px;
    height: 300px;
    background: aliceblue;
    color: black;
    z-index: 1000;
    position: absolute;
    left: 40%;
    top:20%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
