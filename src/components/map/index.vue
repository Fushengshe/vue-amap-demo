<template>
  <div class="map">
    <!--<h3 class="title">{{ msg }}</h3>-->
    <div class="amap-wrapper">
      <el-amap
        :vid="'amap-vue'"
        :map-manager="amapManager"
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-marker
          v-for="marker in markers"
          :position="marker.position"
          :event="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
        ></el-amap-marker>
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
  let amapManager = new VueAMap.AMapManager()
  export default {
    name: 'amap-page',
    data () {
      return {
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
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
              }
            },
            visible: true,
            draggable: false
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
      height 300px
      border 1px #333 solid
    }
  }
</style>
