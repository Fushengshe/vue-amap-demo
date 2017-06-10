<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap
        :vid="'amap-vue'"
        :map-manager="amapManager"
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          :event="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
        ></el-amap-marker>
        <el-amap-circle
          v-for="(circle, index) in circles"
          :index="index"
          :center="circle.center"
          :radius="circle.radius"
          :fill0pacity="circle.fill0pacity"
          :events="circle.events"
        >
        </el-amap-circle>
      </el-amap>
      <div class="toolbar">
        <el-button
          class="toolbar-button"
          @click="toggleVisible">
          toggle first marker
        </el-button>
        <el-button
          class="toolbar-button"
          @click="changePosition">
          change position
        </el-button>
        <el-button
          class="toolbar-button"
          @click="changeDraggle">
          change draggle
        </el-button>
        <el-button
          type="primary"
          class="toolbar-button"
          @click="addMarker">
          add marker
        </el-button>
        <el-button
          class="toolbar-button"
          @click="removeMarker">
          remove marker
        </el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VueAMap from 'vue-amap'
  import ElAmapCircle from '../../../node_modules/vue-amap/src/lib/components/amap-circle'
  let amapManager = new VueAMap.AMapManager()
  export default {
    components: {ElAmapCircle},
    name: 'amap-page',
    data () {
      return {
        msg: 'vue-amap say hello',
        amapManager,
        zoom: 14,
        center: [121.5273285, 31.21515044],
        markers: [
          {
            position: [121.5273285, 31.21515044],
            events: {
              click: () => {
                alert('your click me')
              },
              dragend: (e) => {
                // 使用es6中额解构赋值
                const {lng, lat} = e.target.getPosition()
                this.markers[0].position = [lng, lat]
              }
            },
            visible: true,
            draggable: false
          }
        ],
        circles: [
          {
            center: [121.5273285, 31.21515044],
            radius: 200,
            fill0pacity: 0.3,
            events: {
              click: () => {
                alert('your  click the circle')
              }
            }
          }
        ]
      }
    },
    methods: {
      changePosition () {
        let position = this.markers[0].position
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002]
      },
      changeDraggle () {
        let draggable = this.markers[0].draggable
        this.markers[0].draggable = !draggable
      },
      toggleVisible () {
        let visibleVar = this.markers[0].visible
        this.markers[0].visible = !visibleVar
      },
      addMarker () {
        let marker = {
          position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
        }
        this.markers.push(marker)
      },
      removeMarker () {
        if (!this.markers.length) return
        this.markers.splice(this.markers.length - 1, 1)
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
