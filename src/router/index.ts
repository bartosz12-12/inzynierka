import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import authRoutes from "@/router/auth-routes";
import dashboardRoutes from "@/router/dashboard-routes";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'Dashboard' },
  },
  ...authRoutes,
  ...dashboardRoutes,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
