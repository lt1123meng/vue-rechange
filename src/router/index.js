import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import List from '@/components/list'
import Success from '@/components/success'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/success/:id',
      name: 'success',
      component: Success
    },
    {
      path: '/error/:id',
      name: 'error',
      component: Error
    }
  ]
})
