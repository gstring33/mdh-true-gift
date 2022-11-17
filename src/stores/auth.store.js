import { defineStore } from 'pinia';
import { router } from '@/router'
import { fetcher } from "@/helpers/fetcher.js";
import { useToastStore } from "@/stores/toast.store.js";

const authUrl = import.meta.env.VITE_API_BASE_URL + '/api/login_check';
console.log(authUrl)

export const useAuthStore = defineStore('auth', () => {

    async function login (email, password) {
        try {
            const data = await fetcher.post(authUrl, {email, password})
            localStorage.setItem('user', JSON.stringify(data))
            router.push('/')

        } catch (error) {
            const toastStore = useToastStore()
            toastStore.show({message: error.message})
        }
    }

    function logout() {
        localStorage.removeItem('user');
        router.push('/account/login');
    }

    function user () {
        return JSON.parse(localStorage.getItem('user'))
    }

    return {
        user,
        login,
        logout
    }
})