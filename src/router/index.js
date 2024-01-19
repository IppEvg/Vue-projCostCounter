import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import ErrorPage from '../views/ErrorPage'


const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../views/AboutUs')
  },
  {
    path: '/add/:category?/:cost?',
    name: 'AddView',
    component: AddView
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: ErrorPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
