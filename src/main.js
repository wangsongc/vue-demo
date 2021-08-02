import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from '../plugins/vue-cookies'

const app = createApp(App)
app.use(VueCookies).mount('#app')

window.app = app