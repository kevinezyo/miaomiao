<template>
  <div id="main">
    <!-- 引入组件第三步 -->
    <Header title="喵喵影院"></Header>
    <div class="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_switch">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <CiList />
    </div>

    <TabBar />
  </div>
</template>
 


<script>
// 引入组件第一步
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

import CiList from "@/components/CiList";
export default {
  name: "cinema",
  // 引入组件第二步
  components: {
    Header,
    TabBar,
    CiList,
  },
  data() {
    return {};
  },
  // mounted() {
  //   // 1. 获取数据
  //   // this.axios.get("/api/movieComingList?cityId=10").then(res => {
  //   this.axios.get("/data/cinema.json").then((res) => {
  //     // 2. 拿到数据
  //     var msg = res.data.msg;
  //     // 2.1 判断
  //     if (msg === "ok") {
  //       this.cinema = res.data.data.cinemas;
  //     }
  //   });
  // },

  methods: {},
};
</script>


<style scoped>
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>



