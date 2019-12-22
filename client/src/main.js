import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    myEvent: new Vue()
  },
  render: h => h(App),
}).$mount('#app')
