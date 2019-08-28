import Vue from 'vue'
import underscore from 'vue-underscore'
import App from './App.vue'
import store from './store'

Vue.use(underscore);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
