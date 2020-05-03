export default {
  path: '/movie',
  name:'movie',
  // 按需引入组件
  component: () => import('@/views/Movie'),
  // 二级路由
  children: [
    {
      //  city不用加斜杠 /  会与上面的 /movie 拼接在一起, 加了斜杠就是 绝对路径了
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      // 二级目录重定向 , 在进入 movie 的时候 , 直接进入/movie/nowPlaying 直接显示正在热映
      path:'/movie',
      redirect:'/movie/nowPlaying'
    }
  ]
}