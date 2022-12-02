import { defineStore} from "pinia";
import { ref } from 'vue';

export const useGiftStore = defineStore('request', () => {
    const status =  {
        update : {
            isLoading : ref(false),
            isCompleted : ref(false),
        },
        create : {
            isLoading : ref(false),
            isCompleted : ref(false)
        },
        delete : {
            isLoading : ref(false),
            isCompleted : ref(false)
        }
    }

    const gift = {
        title: ref(null),
        description: ref(null),
        link: ref(null),
        uuid: ref(null)
    }

    return {
        status,
        gift
    }
})