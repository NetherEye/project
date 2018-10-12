import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './router/index'
import allApi from './api/user'
import fetch from './tools/fetch'
import '../static/css/_include/_reset.css'


Vue.prototype.$echarts = echarts
window.$ = $
Vue.use(Element)
Vue.config.productionTip = false

//拦截，没有登录的时候  退回登录页
// router.beforeEach((to, from, next) => {
//   //	next()
//   //	return

//   let localtoken;
//   if (process.env.LOCALTOKEN) {
//     localtoken = true;
//     console.log("上线状态" + process.env.LOCALTOKEN);
//   } else {
//     localtoken = sessionStorage.getItem('token'); //获取本地token
//     console.log("开发状态" + process.env.LOCALTOKEN);
//   }

//   //	let urltoken = to.query.sessionid; //获取urltoken 值
//   let urltoken = to.query.token; //获取urltoken 值
//   let user = sessionStorage.getItem('access-user'); //获取本地user信息



//   let toname = to.name;
//   if (toname == '访问限制') {
//     next();
//     return
//   }

//   if (toname == '进入系统' || toname == "/") {

//     if (localtoken && user) {
//       let usertype = JSON.parse(sessionStorage.getItem('access-user')).data.type;

//       if (usertype == "学校" || usertype == "教师") {
//         next({
//           path: '/Foodhome'
//         })
//       } else if (usertype == "教育局") {
//         next({
//           path: '/eduHome'
//         })
//       } else if (usertype == "学生" || usertype == "家长") {
//         next({
//           path: '/students'
//         })
//       } else if (usertype == "供应商") {
//         next({
//           path: '/supHome'
//         })
//       }
//       return
//     } else {
//       next();
//     }
//   }

//   let flag = false; //tokan判断flag
//   let userflag = false; //user信息判断flag
//   let urlflag = false; //路由跳转权限

//   //判断本地有没有token
//   if (localtoken) { //判断本地有没有token
//     //next();
//     flag = true;
//   } else {
//     if (urltoken) {
//       //请求url
//       fetch.setToken(urltoken);
//       flag = true;
//     } else {
//       flag = false;
//     }
//   }

//   if (flag) { //token 验证通过

//     //验证本地有没有用户信息
//     if (!user) {
//       //获取用户信息
//       fetch.httpGetR(allApi.userinfo, "", (res) => { //请求用户信息
//         let cod = res.data.code;
//         if (cod == 200) {
//           sessionStorage.setItem('access-user', JSON.stringify(res.data))
//           userflag = true;
//         } else {
//           next({
//             path: '/500'
//           })
//         }

//       });

//     } else {
//       userflag = true;
//     }
//     if (userflag) { //user信息通过

//       //判断路由权限
//       let usertype = JSON.parse(sessionStorage.getItem('access-user')).data.type;
//       let metatype = to.meta.type;

//       for (let i = 0; i <= metatype.length; i++) {
//         if (usertype == metatype[i]) {
//           urlflag = true;
//           break;
//         }
//       }

//       if (urlflag) { //有访问权限
//         next()
//       } else { //没有访问权限
//         next({
//           path: '/501'
//         })
//       }

//     } else { // 跳500拿userInfo
//       next({
//         path: '/500'
//       })
//     }
//   } else { //没有访问权限
//     next({
//       path: '/501'
//     })
//   }

// });

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
