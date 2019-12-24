import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import MycomponentFns from './components/func';
Vue.use(MycomponentFns);

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    myEvent: new Vue()
  },
  render: h => h(App),
}).$mount('#app')
