import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import App from './App.vue'
import routes from "./Routes.js"

// enables use of plug in 
Vue.use(VueRouter);
// Vue.use(VueResource);

const router = new VueRouter({
  // ES6 property name and value equal's itself
  routes, 
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // set up final portion of route 
  router, 
}).$mount('#app')
