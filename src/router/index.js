import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Catalogo from '../components/Catalogo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Catalogo',
    name: 'Catalogo',
    component: Catalogo
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
