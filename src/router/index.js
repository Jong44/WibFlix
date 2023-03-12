import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: UserView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/User/Page/HomePage.vue'),
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('../views/User/Page/DetailPage.vue'),
          props: true
        },
      ]
    },
  ]
})

export default router
