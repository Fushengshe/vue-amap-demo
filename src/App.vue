<template>
  <div id="app">
    <router-link to="map"><el-button type="primary">map</el-button></router-link>
    <router-link to="hello"><el-button type="ghost">hello</el-button></router-link>
    <router-view></router-view>
    <!--<amap></amap>-->
  </div>
</template>

<script>
//  import amap from './components/map'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'vue-amap向你问好！'
      }
    },
    components: {
//      amap
    }
  }
</script>

<style lang="stylus">
  #app {
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
    .amap-wrapper {
      /*width 500px*/
      height 500px
      margin 0 auto
    }

  }
</style>
