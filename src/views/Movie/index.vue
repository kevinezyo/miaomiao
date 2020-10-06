<template>
  <div id="main">
    <!-- 引入组件第三步 -->
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <TabBar />
  </div>
</template>

<script>
// 引入组件 第一步
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

// 引入弹窗插件
import { messageBox } from "@/components/JS";

import NowPlaying from "@/components/NowPlaying";
export default {
  name: "movie",
  //  引入组件第二步
  components: {
    Header,
    TabBar,
    NowPlaying,
  },

  mounted() {
    // messageBox({
    //   title: "定位",
    //   content: "沈阳",
    //   cancel: "取消",
    //   ok: "切换城市",
    //   handleCancel(){
    //     console.log('haha');
    //   },
    //   handlerOk(){
    //     console.log(222);
    //   }
    // });
    // 3秒后弹窗定位  不用马上弹出
    setTimeout(() => {
      //  获取本地数据,  前面的 ../ 等前缀都不需要, 直接在 / data中取
      this.axios.get("/data/getLocation.json").then((res) => {
        var msg = res.data.msg;
        if (msg === "ok") {
          var nm = res.data.data.nm;
          var id = res.data.data.id;
          // console.log(res.data.data.nm);
          if (this.$store.state.city.id == id) {
            return;
          }
          messageBox({
            title: "定位",
            content: nm,
            cancel: "取消",
            ok: "切换城市",
            // handleCancel() {
            //   console.log("haha");
            // },
            handlerOk() {
              //  修改缓存
              window.localStorage.setItem("nowNm", nm);
              window.localStorage.setItem("nowId", id);
              window.location.reload();
            },
          });
        }
      });
    }, 3000);
  },

  data() {
    return {};
  },
  methods: {},
};
</script>


<style scoped>
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

.movie_menu div.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>

