import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Message from '@/pages/Message'
import Setting from '@/pages/Setting'
import Order from '@/pages/Order'
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
      component:Home,
      redirect:'/home/product',
      children: [
        {
          path: 'product',
          component:Product
        },
        {
          path: 'message',
          component:Message
        },
        {
          path: 'order',
          component:Order
        },
        {
          path: 'setting',
          component:Setting
        }
      ]
    }
  ]
})
