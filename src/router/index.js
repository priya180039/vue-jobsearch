import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import TeamsView from '@/views/TeamsView.vue'
import JobsView from '@/views/JobsView.vue'
import StudentsView from '@/views/StudentsView.vue'
import LocationsView from '@/views/LocationsView.vue'
import BenefitsView from '@/views/BenefitsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/students',
    name: 'Students',
    component: StudentsView
  },
  {
    path: '/locations',
    name: 'Locations',
    component: LocationsView
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: BenefitsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
