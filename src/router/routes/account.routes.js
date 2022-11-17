import LoginView from "@/views/auth/LoginView.vue";
import ResetPasswordView from "@/views/auth/ResetPasswordView.vue";

export default {
    path: '/account',
    children: [
        {
            path: 'login',
            name: 'login',
            component: LoginView,
        },
        {
            path: 'reset-password',
            name: 'resetPassword',
            component: ResetPasswordView,
            meta: { requiresAuth: true }
        },
    ]
};