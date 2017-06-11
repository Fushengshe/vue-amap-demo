<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap-search-box
        class="amap-search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult"
      >
      </el-amap-search-box>
      <el-amap
        :vid="'amap-vue'"
        :map-manager="amapManager"
        :center="center"
        :zoom="zoom"
        :events="events"
        :plugin="plugins"
        class="amap-demo">
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          :event="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
        ></el-amap-marker>
        <el-amap-info-window
          v-for="(window, index) in windows"
          :index="index"
          :position="window.position"
          :visible="window.visible"
          :content="window.content"
          :events="window.events"
        ></el-amap-info-window>
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
      <div class="geocoder-bar">
        position: [{{lng}},{{lat}}] address: {{address}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /* eslint-disable no-duplicate-imports */
  import VueAMap from 'vue-amap'
  let amapManager = new VueAMap.AMapManager()
  export default {
    name: 'amap-page',
    data () {
      let self = this
      return {
        msg: 'vue-amap say hello',
        amapManager,
        zoom: 14,
        lat: '',
        lng: '',
        center: [119.547204, 39.919205],
        markers: [
          {
            position: [119.547204, 39.919205],
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
        windows: [
          {
            position: [119.547204, 39.919205],
            visible: true,
            content: 'hello'
          }
        ],
        address: '',
        plugins: [
          {
            pName: 'AMap.OverView',
            events: {
              init (instance) {
                console.log(instance)
              }
            }
          }, {
            pName: 'AMap.Scale',
            events: {
              init (instance) {
                console.log(instance)
              }
            }
          }, {
            pName: 'AMap.ToolBar',
            events: {
              init (instance) {
                console.log(instance)
              }
            }
          }, {
            pName: 'AMap.MapType',
            defaultType: 0,
            events: {
              init (instance) {
                console.log(instance)
              }
            }
          }
        ],
        events: {
          click (e) {
            let {lng, lat} = e.lnglat
            self.lng = lng
            self.lat = lat
            // 这里用高德 SDK 完成
            /* eslint-disable no-undef */
            let geocoder = new AMap.Geocoder({
              radius: 1000,
              extensions: 'all'
            })
            geocoder.getAddress([lng, lat], function (status, result) {
              console.log(status)
              console.log(result)
              if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                  self.address = result.regeocode.formattedAddress
                  self.$nextTick()
                }
              }
            })
          }
        },
        searchOption: {
          city: '秦皇岛',
          citylimit: true
        }
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
        let lng = 119.547204 + (Math.random() - 0.5) * 0.02
        let lat = 39.919205 + (Math.random() - 0.5) * 0.02
        let marker = {
          position: [lng, lat]
        }
        let window = {
          position: [lng, lat],
          visible: true,
          content: 'hello',
          event: {
            click (e) {
              e.target.visible = true
            }
          }
        }
        this.markers.push(marker)
        this.windows.push(window)
      },
      removeMarker () {
        if (!this.markers.length) return
        this.markers.splice(this.markers.length - 1, 1)
      },
      onSearchResult (pois) {
        let latSum = 0
        let lngSum = 0
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi
            lngSum += lng
            latSum += lat
            this.markers.push({position: [poi.lng, poi.lat]})
          })
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          }
          this.center = [center.lng, center.lat]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .amap-wrapper {
    position relative
    .amap-search-box {
      position absolute
      top 25px
      left 100px
    }
    .amap-demo {
      height 500px
      border 1px #333 solid
    }
  }
</style>
