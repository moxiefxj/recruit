import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';

Vue.use(ElementUI); 

const host = "http://localhost:8084"
const instance = axios.create({
    baseURL: host
})
Vue.prototype.axios = instance;

Vue.prototype.$http = instance

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
