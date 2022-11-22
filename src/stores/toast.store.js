import { defineStore } from 'pinia';
import {
    Toaster,
    ToasterPosition,
    ToasterTimer,
    ToasterType
} from "bs-toaster";
import { ref } from 'vue';

export const useToastStore = defineStore('toast', () => {

    const toast = ref(null)
    const message = ref(null)
    const toastClass = ref(null)

    function init() {
        toast.value = new Toaster({
            position: ToasterPosition.TOP_START,
            timer: ToasterTimer.ELAPSED,
            delay: 10000
        })
    }

    function showDanger (title, message) {
        toast.value.create(title, message, {
            type: ToasterType.WARNING,
        })
    }

    function showSuccess (title, message) {
        toast.value.create(title, message, {
            type: ToasterType.SUCCESS,
        })
    }

    return {
        message,
        toastClass,
        init,
        showDanger,
        showSuccess
    }
})