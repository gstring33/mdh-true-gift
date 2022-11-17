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
    const token = localStorage.getItem('token')
    const isApiUrl = url.startsWith(import.meta.env.VITE_API_BASE_URL)
    if (token && isApiUrl) {
        return { Authorization: `Bearer ${token}`};
    } else {
        return {};
    }
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;
    if(!response.ok) {
        return Promise.reject(data)
    }

    return data;
}
