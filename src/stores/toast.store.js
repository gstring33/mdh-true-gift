import { defineStore } from 'pinia';
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min';
import { ref } from 'vue';

export const useToastStore = defineStore('toast', () => {

    const toast = ref(null)
    const message = ref(null)

    function init(element) {
        toast.value = new Toast(element)
        console.log('Toast initialized')
    }

    function show (options) {
        if (toast.value !== null) {
            message.value = options.message
            toast.value.show()
        }
    }

    return {
        message,
        init,
        show,
    }
})