import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store.js'
import vueRouter from 'vue-router'

import Messages from './components/Messages'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(vueRouter)

const routes = [
  { path: "/", component: Messages }
]

const router = new VueRouter({routes})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
