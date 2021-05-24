import Vue from 'vue'
import VueAMap from 'vue-amap';

//高德地图
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'b6aa9c41106e3f8c24cf47e749299569',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
    v: '1.4.4',
    uiVersion: '1.0.11' // 版本号
});