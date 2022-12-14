import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')