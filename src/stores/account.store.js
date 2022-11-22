import { defineStore } from 'pinia';
import { fetcher } from "@/helpers/fetcher.js";
import { useToastStore } from "@/stores/toast.store.js";

export const useAccountStore = defineStore('account', () => {

    async function changePassword (newPassword, newPassword2) {
        const url = import.meta.env.VITE_API_BASE_URL + '/api/change-password';
        const toastStore = useToastStore()

        try {
            await fetcher.post(url, {newPassword, newPassword2})
            localStorage.removeItem('user');
            toastStore.init()
            const message = "Dein Passwort wurde erfolgreich geändert. Du kannst dich jetzt mit deinem neuen Passwort einloggen. </br> " +
                "<a type='button' class='btn btn-sm btn-primary' href='/account/login'>Jetzt einloggen</a>"
            toastStore.showSuccess('Glückwünsche ...', message)

        } catch (error) {
            if (error?.status === 401) {
                toastStore.init()
                const message = "<b>Eine gültige Anmeldung ist erforderlich, bevor Sie Ihr Passwort ändern können.</b><hr/> " +
                    "<a type='button' class='btn btn-sm btn-primary' href='/account/login'>Jetzt einloggen</a>"
                toastStore.showDanger('Achtung...', message)

            }else if (error?.status === 400) {
                toastStore.init()
                const message = "<b>Dein Passwort wurde nicht gespeichert. Bitte überprüfe Folgendes:</b> <hr/>" +
                    "<ul>" +
                    "<li>das Bestätigungsfeld muss mit dem gewählten Passwort identisch sein</li>" +
                    "<li>dein Passwort muss aus <b>mindestens 6 Zeichen</b> bestehen</li>" +
                    "</ul>"
                toastStore.showDanger('Achtung...', message)
            }
        }
    }

    return {
        changePassword
    }
})