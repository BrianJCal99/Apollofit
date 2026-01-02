import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: () => import('../views/WorkoutsView.vue'),
    },
    {
      path: '/diet-plans',
      name: 'diet-plans',
      component: () => import('../views/DietPlansView.vue'),
    },
    {
      path: '/workout-plans',
      name: 'workout-plans',
      component: () => import('../views/WorkoutPlansView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/search/diet-plans',
      name: 'search-diet-plans',
      component: () => import('../views/SearchDietPlansView.vue'),
    },
    {
      path: '/search/workout-plans',
      name: 'search-workout-plans',
      component: () => import('../views/SearchWorkoutPlansView.vue'),
    },
  ],
})

export default router
