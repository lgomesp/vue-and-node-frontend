import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store.js'
import vueRouter from 'vue-router'

import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import Message from './components/Message'
import Register from './components/Register'
import Login from './components/Login'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(vueRouter)

const routes = [
  { path: "/", component: Messages },
  { path: "/new-message", component: NewMessage },
  { path: "/message/:id", component: Message },
  { path: "/register", component: Register },
  { path: "/login", component: Login }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
