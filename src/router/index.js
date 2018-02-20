import Vue from 'vue'
import Router from 'vue-router'

// Pages

import Main from '@/components/pages/Main'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
