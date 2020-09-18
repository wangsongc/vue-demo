import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import euiexample from './component/euiexample.vue'
import secondcomponent from './component/secondcomponent.vue'
import issue211 from './component/issue211.vue'
import issue169 from './component/issue169.vue'
import ValidationProvider from './component/veevalidatedemo.vue'

 
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/euiexample',
      component: euiexample
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/issue211',
      component: issue211
    },
    {
      path: '/issue169',
      component: issue169
    },
    {
      path: '/veevalidatedemo',
      component: ValidationProvider
    }
  ]
})
 
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

// const app = new Vue({
//   router
// }).$mount('#app')
