import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import router from './router.js'

/*import VueRouter from 'vue-router'
import Login from './pages/login.vue'*/
import dataservice from '@/dataservice.js'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'

//Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if(to.name != "Login" && !dataservice.isAuthenticated()){
      next({name: "Login"});
    }
    else{
      next();
    }
})

/*if(dataservice.isAuthenticated()){

}*/

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})