import { createRouter, createWebHistory } from "vue-router";
import accountRoutes from "@/router/routes/account.routes.js";
import adminRoutes from "@/router/routes/admin.routes.js";
import DashboardView from "@/views/DashboardView.vue";
import { useAuthStore } from "@/stores/auth.store.js";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {... accountRoutes},
    {... adminRoutes},
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const user = authStore.user()

  if (to.meta.requiresAuth && !user) {
    router.push('/account/login');
  }

  next();
});

export default router;
