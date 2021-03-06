import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import ECharts from 'echarts'

//事件总线
Vue.prototype.$bus = new Vue();
Vue.prototype.$ECharts = ECharts

Vue.use(ElementUI);
Vue.use(BaiduMap,{
  al:"GZq6GIuYKYYEAdZnxNGjAYqLB8YzQvon"
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
