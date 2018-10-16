const Login = () => import(/* webpackChunkName:"Login" */'@/pages/account/Login')

export default [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      title: '登录',
      displayControl: {
        header: false,
        tabBar: false
      }
    }
  }
]
