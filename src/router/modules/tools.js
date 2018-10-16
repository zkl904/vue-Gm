const demo = () => import(/* webpackChunkName:"demo" */'@/pages/tools/demo/index')

export default [
  {
    name: 'demo',
    path: '/demo',
    component: demo,
    meta: {
      title: 'demo页面',
      displayControl: {
        header: false,
        tabBar: false
      }
    }
  }
]
