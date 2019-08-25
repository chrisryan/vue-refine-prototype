import Vue from 'vue'
import underscore from 'vue-underscore';
import App from './App.vue'

Vue.use(underscore);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
