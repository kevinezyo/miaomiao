export default {
  path: '/cinema',
  name:'cinema',
  component: () => import('@/views/Cinema'),
  children:[
    {
      path:'ciList',
      component: ()=> import('@/components/CiList')
    }
  ]
}