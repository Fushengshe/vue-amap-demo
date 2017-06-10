<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap
        :vid="'amap-vue'"
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-polyline
          :editable="polyline.editable"
          :path="polyline.path"
          :events="polyline.events"
        ></el-amap-polyline>
      </el-amap>
      <div class="tool-bar">
        <el-button type="primary" @click="changeEditable">edit the line</el-button>
        <!--<el-button type="danger" @click="changeEditable">disable edit the line</el-button>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'amap-page',
    data () {
      return {
        msg: 'vue-amap say hello',
        zoom: 12,
        center: [121.5273285, 31.21515044],
        polyline: {
          path: [[121.5389385, 31.21515044], [121.5389385, 31.29615044], [121.5273285, 31.21515044]],
          events: {
            click (e) {
              console.log(e)
              alert('your click the polyline')
            },
            end: (e) => {
              let newPath = e.target.getPath().map(point => [point.lng, point.lat])
              console.log(newPath)
            },
            editable: false
          }
        }
      }
    },
    methods: {
      changeEditable () {
        this.polyline.editable = !this.polyline.editable
        console.log('index.vue line 53')
        console.log(this.polyline.editable)
      }
    }
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
