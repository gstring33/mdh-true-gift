import { defineStore } from 'pinia';
import { ref } from 'vue'
import { router } from '@/router'
import { fetcher } from "@/helpers/fetcher.js";
import { useToastStore } from "@/stores/toast.store.js";

const authUrl = import.meta.env.VITE_API_BASE_URL + '/api/login_check';

export const useAuthStore = defineStore('auth', () => {

    let returnUrl = null;
    let user = ref(null);

    async function login (email, password) {
        try {
            const data = await fetcher.post(authUrl, {email, password})
            this.user = data
            localStorage.setItem('token', data.token)
            router.push('/')

        } catch (error) {
            const toastStore = useToastStore()
            toastStore.show({message: error.message})
        }
    }

    function logout() {
        this.user = null;
        localStorage.removeItem('token');
        router.push('/account/login');
    }

    return {
        user,
        login,
        logout,
        returnUrl
    }
})