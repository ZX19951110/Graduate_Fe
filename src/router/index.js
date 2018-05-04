import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Salary from '@/components/Salary'
import Citys from '@/components/Citys'
import Workyear from '@/components/Workyear'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/salary',
      name: 'salary',
      component: Salary
    },
    {
      path: '/citys',
      name: 'citys',
      component: Citys
    },
    {
      path: '/workyear',
      name: 'workyear',
      component: Workyear
    }
  ]
})
