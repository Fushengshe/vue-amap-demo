// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select, Message } from 'element-ui'
import AMap from 'vue-amap'
Vue.config.productionTip = false
Vue.use(AMap)
Vue.use(Button)
Vue.use(Select)
Vue.use(Message)
AMap.initAMapApiLoader({
  key: 'c3a240c713e5a71dfacf5d746c78ffa8',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.Walking',
    'AMap.Driving',
    'AMap.Geocoder'
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
