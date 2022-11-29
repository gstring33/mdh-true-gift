import { defineStore} from "pinia";
import { ref } from 'vue';

export const useRequestStore = defineStore('request', () => {
    const load = ref(null)

    return {
        load
    }
})