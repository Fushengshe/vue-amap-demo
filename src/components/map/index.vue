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
      let map = new AMap.Map(
        'amap-cointainer',
        {
          resizeEnable: true,
          center: [116.397428, 39.90923], // 地图中心点
          zoom: 13 // 地图显示的缩放级别
        })
      AMap.service(['AMap.walking'], function () {
        let MWalk = new AMap.Walking({
          map: map,
          panel: 'panel'
        })
        MWalk.search([
          {keyword: '北京市地震局(公交站)'},
          {keyword: '亦庄文化园(地铁站)'}
        ], function (status, result) {

        })
        console.log(MWalk)
      })
    })
  }
}
</script>

<style lang="css">
#amap-cointainer {
  height: 400px;
}
</style>
