import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store.js'
import vueRouter from 'vue-router'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import Message from './components/Message'
import Register from './components/Register'
import Login from './components/Login'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(vueRouter)

const routes = [
  { path: "/", component: Messages, meta: { title: 'Messages', requiresAuth: true } },
  { path: "/new-message", component: NewMessage, meta: { title: 'New Message', requiresAuth: true } },
  { path: "/message/:id", component: Message, meta: { title: 'Message', requiresAuth: true } },
  { path: "/register", component: Register },
  { path: "/login", component: Login }
]

const router = new VueRouter({routes, mode: 'history'})

router.beforeEach((to, from, next) => {

  // if user already logegged in redirect to main page
  if ( (to.path == '/login' || to.path == '/register' ) && store.state.token) {
    next('/');
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.token) {
      next('/login');
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
