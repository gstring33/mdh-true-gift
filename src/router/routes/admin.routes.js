import AdminView from "@/views/admin/AdminView.vue";

export default {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: {
        requiresAuth: true,
        isAdmin: true
    },
    children: []
};