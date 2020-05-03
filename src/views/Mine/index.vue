<template>
  <div id="main">
    <!-- 引入组件第三步 -->
    <Header title="我的喵喵"></Header>
    <Login></Login>
    <TabBar></TabBar>
  </div>
</template>
  

<script>
// 引入组件第一步
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

import Login from '@/components/Login'
export default {
  name: "mine",
  // 引入组件第二步
  components: {
    Header,
    TabBar,
    Login
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped>
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>