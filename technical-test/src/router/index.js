import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/foodMenu',
    name: 'foodMenu',
    component: () => import(/* webpackChunkName: "food menu" */ '../views/FoodMenuView.vue')
  },
  {
    path: '/drinkMenu',
    name: 'drinkMenu',
    component: () => import(/* webpackChunkName: "drink menu" */ '../views/DrinkMenuView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
