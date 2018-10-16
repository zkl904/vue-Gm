import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Store from '@/store'

import account from './modules/account'
import home from './modules/home'
import tools from './modules/tools'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...account,
    ...home,
    ...tools,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// 拦截器 路由跳转前使用,这里是用来判断是否有token
router.beforeEach((to,from,next) =>{
  // const token = sessionStorage.getItem('demo-token');
  let token  = window.cookieStore.read('token')
  console.log(token, '111')
  // if(to.path == '/'){ // 如果是跳转到登录页的
  //   if(token == 'null' || token == null){
  //     next('/login') // 如果有token就转向todolist不返回登录页
  //   }
  //   next()
  // } else {
  //   next()  // 正常跳转
  // }
  if (to.path == '/login' || to.path == '/') {
    next()
  } else {
    if (token == 'null' || token == null) {
      next('/login') // 如果有token就转向todolist不返回登录页
    } else {
      next()  // 正常跳转
    }
  }
})

export default router


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
