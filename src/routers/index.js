import Vue from 'vue'
import vueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(vueRouter)

export default new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,

    // 重定向, 当出现杂乱路径,直接跳转到 movie
  {
    path:'/*',
    redirect:'/movie'
  }
  ]
})