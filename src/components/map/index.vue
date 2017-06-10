<template>
  <div class="map">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap-search-box
        class="search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult"
      ></el-amap-search-box>
      <el-amap
        :vid="'amap-vue'"
        :map-manager="amapManager"
        :center="mapCenter"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker"
        ></el-amap-marker>
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
        zoom: 12,
        mapCenter: [121.59996, 31.197646],
        markers: [
          [121.59996, 31.197646],
          [121.40018, 31.197622],
          [121.69991, 31.207649]
        ],
        searchOption: {
          city: '上海',
          citylimit: true
        }
      }
    },
    methods: {
      addMarker () {
        let lng = 121.5 + Math.round(Math.random() * 1000) / 10000
        let lat = 31.197646 + Math.round(Math.random() * 500) / 10000
        this.markers.push([lng, lat])
      },
      onSearchResult (pois) {
//        /* eslint-disable no-unused-vars */
        let latSum = 0
        let lngSum = 0
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi
            lngSum += lng
            latSum += lat
            this.markers.push([poi.lng, poi.lat])
          })
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          }
          this.mapCenter = [center.lng, center.lat]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .amap-wrapper {
    position relative
    .search-box {
      position absolute
      top 25px
      left 20px
      border-radius 5px
    }
    .amap-demo {
      height 700px
      border 1px #333 solid
    }
  }
</style>
