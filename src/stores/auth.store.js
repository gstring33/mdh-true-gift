import { defineStore } from 'pinia';
import { ref } from 'vue'
import { router } from '@/router'
import { fetcher } from "@/helpers/fetcher.js";

const authUrl = import.meta.env.VITE_API_BASE_URL + '/api/login_check';

export const useAuthStore = defineStore('auth', () => {

    let returnUrl = null;
    let user = ref(false);

    async function login (email, password) {
        const data = await fetcher.post(authUrl, {email, password})
        user.value = data
        router.push('/')
    }

    return {
        user,
        login,
        returnUrl
    }
})