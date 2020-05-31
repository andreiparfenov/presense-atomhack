import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import AddTask from '@/components/AddTask'
import Shop from '@/components/Shop'
import Dashboard2 from '@/components/Dashboard2'
import Dashboard3 from '@/components/Dashboard3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lk',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add-task',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/lk2',
      name: 'Dashboard2',
      component: Dashboard2
    },
    {
      path: '/lk3',
      name: 'Dashboard3',
      component: Dashboard3
    }
  ]
})
