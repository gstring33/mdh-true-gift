import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/auth/LoginView.vue";
import ResetPasswordView from "../views/auth/ResetPasswordView.vue";
import AdminView from "../views/admin/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      component: ResetPasswordView
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: { requiresAuth: true }
    }
    ]
})

router.beforeEach((to, from, next) => {
  const user = false
  if (to.meta.requiresAuth && !user) {
    next ({ name : 'login'})
  }

  next()
})

export default router;
