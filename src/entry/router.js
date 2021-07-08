import { createRouter, createWebHistory } from 'vue-router'

import Index from '../page/Index.vue'
import Home from '../page/Home.vue'
import Login from '../page/Login.vue'
import Resize from '../page/Resize.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
        },
        {
          path: '/resize',
          name: 'Resize',
          component: Resize,
        },
      ],
    },
  ],
})

export default router
