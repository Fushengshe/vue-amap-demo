<template lang="html">
  <div id="amap-cointainer">

  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  mounted () {
    lazyAMapApiLoaderInstance.load().then(() => {
      /* eslint-disable no-undef */
      this.map = new AMap.Map(
        'amap-cointainer',
        {
          resizeEnable: true,
          center: [116.397428, 39.90923], // 地图中心点
          zoom: 13 // 地图显示的缩放级别
        })
      let walking = new AMap.Walking({
        map: this.map,
        panel: 'panel'
      })
      walking.search([116.399028, 39.845042], [116.436281, 39.880719])
    })
  }
}
</script>

<style lang="css">
#amap-cointainer {
  height: 400px;
}
</style>
