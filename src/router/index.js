import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
