import { useAuthStore } from "@/stores/auth.store.js";

export const fetcher = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}

function request(method) {
    return async (url, body) => {
        const options = {
            method,
            headers: authHeader(url)
        }

        if (body) {
            options.headers['Content-Type'] = 'application/json'
            options.headers['Access-Control-Allow-Origin'] = '*'
            options.headers['charset'] = 'UTF-8'
            options.body = JSON.stringify(body)
        }

         const data = await fetch(url, options).then(handleResponse)

        return data
    }
}

function authHeader(url) {
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.token;
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_BASE_URL)
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}`};
    } else {
        return {};
    }
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;
    if(!response.ok) {
        const { user } = useAuthStore();
       if ([401,403].includes(response.status) && user)  {
           //Logout
       }
       const error = (data && data.message) || response.status;
       return Promise.reject(error)
    }

    return data;
}