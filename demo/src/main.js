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

new Vue({
  render: h => h(App),
}).$mount('#app')

// 以下部分为相关配置
// 后端端口url
Vue.prototype.$APIurl='http://111.230.173.4:8090';



