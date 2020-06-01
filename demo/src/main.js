import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(VueParticles)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { HappyScroll } from 'vue-happy-scroll'
//自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

import VueContextMenu from 'vue-contextmenu'
Vue.use(VueContextMenu);

import routers from '../src/router/router.js'
import Router from "vue-router"; // 路由

const router=new Router({
  routes:routers
});

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app');

// 以下部分为相关配置
// 后端端口url

import global from './tools/global'   //注意文件路径，实际路径以项目目录结构为准
global.setAPIurl('http://111.230.173.4:8081');



