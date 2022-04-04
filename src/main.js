import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store"
import Toast from "@/components/common/toast";
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(Toast)
FastClick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placehoder.jpg')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
