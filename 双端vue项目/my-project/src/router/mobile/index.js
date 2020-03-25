// 手机入口
import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/components/mobile/home')), 'home')
const may = r => require.ensure([], () => r(require('@/components/mobile/may')), 'may')

Vue.use(Router)

let router = new Router({
  base: __dirname,
  // linkActiveClass: 'active', // 更改激活状态的Class值
  routes: [
    {
      path: '/',
      name: 'home',
      keepAlive:false,
      component: home
    },
    {
      path: '/may',
      name: 'may',
      keepAlive:false,
      component: may
    },
  ]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router
