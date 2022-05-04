import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
Vue.use(Router)

export default new Router({
  routes: [ 
    { 
      path: '/', 
      component:Index
    },
    { 
      path: '/login',
      component:Login
    },
    { 
      path: '/register',
      component:Register  
    },
    { 
      path: '/home',
      component:Home
    }
  ]
})
