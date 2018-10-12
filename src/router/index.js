import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import limitpage from '@/components/500'
import limitpage1 from '@/components/501'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    , {
			path: "/500",
			name: '进入系统',
			component: limitpage
		},{
			path: "/501",
			name: '访问限制',
			component: limitpage1
		}
  ]
})
