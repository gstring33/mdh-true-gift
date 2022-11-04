import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import { useAuthStore } from "@/stores/auth.store.js";
import LoginView from "@/views/auth/LoginView.vue";
import ResetPasswordView from "@/views/auth/ResetPasswordView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: "/account/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/account/reset-password",
      name: "resetPassword",
      component: ResetPasswordView,
      meta: { requiresAuth: true }
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  console.log(authStore.user)
  if (to.meta.requiresAuth && !authStore.user) {
    authStore.returnUrl = to.fullPath
    router.push('/account/login');
  }

  next();
});

export default router;
