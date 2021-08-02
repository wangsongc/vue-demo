import Vue from 'vue'
import App from './App.vue'

import VueCookies from './plugins/vue-cookies'
import elementUI from "element-ui";

Vue.config.productionTip = false
Vue.use(VueCookies,elementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
