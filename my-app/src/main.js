import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import AdminLandingPage from "./components/Admin/AdminLandingPage.vue"
import Events from "./components/Admin/Events/Events.vue"

// enables use of plug in 
Vue.use(VueRouter);

// setting up router
const routes = [
  {path: '/home', component: AdminLandingPage}, 
  {path: '/events', component: Events}, 
  
]; 

const router = new VueRouter({
  // ES6 property name and value equal's itself
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // set up final portion of route 
  router, 
}).$mount('#app')
