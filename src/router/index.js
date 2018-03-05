import Vue from 'vue'
import Router from 'vue-router'

// Pages

import Catalog from '@/components/pages/Catalog'
import Card from '@/components/pages/Card'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/card/:id',
      name: 'Card',
      component: Card
    }
  ]
})
