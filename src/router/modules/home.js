const home = () => import(/* webpackChunkName:"Login" */'@/pages/home/index')

export default [
  {
    name: 'home',
    path: '/',
    component: home,
    meta: {
      title: 'home首页',
      displayControl: {
        header: false,
        tabBar: false
      }
    }
  }
]
