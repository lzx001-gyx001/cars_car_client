<template>
  <div class="amap-wrap">
    <el-amap vid="container" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Index",
  data() {
    return {
      zoom: 12,
      center: [116.397428, 39.90923],
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("container", {
        zoom: this.zoom, //设置地图显示的缩放级别
        center: this.center, //设置地图中心点坐标
        // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
        // mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
        // viewMode: "2D", //设置地图模式
        lang: "zh_cn", //设置地图语言类型
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>