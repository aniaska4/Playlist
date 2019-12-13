import Vue from 'vue'

Vue.config.devtools = true
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store.js"

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),store,
}).$mount('#app')
