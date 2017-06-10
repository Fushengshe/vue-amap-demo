<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap
        :vid="'amap-vue'"
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-ground-image
          v-for="(groundimage, index) in groundimages"
          :index="index"
          :url="groundimage.url"
          :bounds="groundimage.bounds"
          :events="groundimage.events"
        ></el-amap-ground-image>
      </el-amap>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ElAmapGroundImage from '../../../node_modules/vue-amap/src/lib/components/amap-ground-image'
  export default {
    components: {ElAmapGroundImage},
    name: 'amap-page',
    data () {
      return {
        msg: 'vue-amap say hello',
        zoom: 14,
        center: [121.5273285, 31.21515044],
        groundimages: [
          {
            url: '//faas.elemecdn.com/desktop/media/img/appqc.95e532.png',
            bounds: [[121.5273285, 31.21515044], [122.9273285, 32.31515044]],
            events: {
              click () {
                alert('click groundimage')
              }
            }
          }
        ]
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
