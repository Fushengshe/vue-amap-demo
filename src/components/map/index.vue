<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <!-- 注意：vid不要重复 -->
      <el-amap
        :vid="amap-vue"
        :center="center"
        :map-manager="amapManager"
        :zoom="zoom"
        :events="events"
        class="amap-demo"
      ></el-amap>
      <div class="toolbar">
        <button @click="add()">add market</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /** 注意在这里需要引入 AMap，这一点和官方给的文档不是很一样
   * 应该是因为es-lint的原因，会在events中显示AMap未定义
   */

  import VueAMap from 'vue-amap'
  let amapManager = new VueAMap.AMapManager()
  export default{
    data () {
      return {
        zoom: 12,
        center: [121.59996, 31.197646],
        amapManager,
        events: {
          init (o) {
            /* eslint-disable no-undef */
            let marker = new AMap.Marker({
              position: [121.59996, 31.197646]
            })
            marker.setMap(o)
          }
        }
      }
    },
    methods: {
      add () {
        let o = amapManager.getMap()
        let marker = new AMap.Marker({
          position: [121.59996, 31.177646]
        })
        marker.setMap(o)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .amap-wrapper {

    .amap-demo {
      height 300px
    }
  }
</style>
