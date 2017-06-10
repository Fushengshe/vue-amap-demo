<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap
        vid="amap-vue"
        :map-manager="amapManager"
        :center="center"
        :zoom="zoom"
        :plugin="plugins"
        class="amap-demo">
      </el-amap>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VueAMap from 'vue-amap'
  let amapManager = new VueAMap.AMapManager()
  export default {
    name: 'amap-page',
    data () {
      return {
        msg: 'vue-amap say hello',
        amapManager,
        zoom: 14,
        center: [121.5273285, 31.21515044],
        plugins: [{
          pName: 'AMap.OverView',
          isOpen: true,
          visible: true,
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        }]
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .amap-wrapper {
    .amap-demo {
      height 700px
      border 1px #333 solid
    }
  }
</style>
