import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMarker,
    faTrashCan,
    faCartPlus,
    faPaperPlane,
    faCheck,
    faUser,
    faXmark,
    faFloppyDisk,
    faArrowRightToBracket,
    faArrowUpRightFromSquare,
    faPlus,
    faCirclePause,
    faTriangleExclamation
} from  "@fortawesome/free-solid-svg-icons";

import "./assets/scss/main.scss";

const app = createApp(App);

library.add(
    faMarker,
    faTrashCan,
    faCartPlus,
    faPaperPlane,
    faCheck,
    faUser,
    faXmark,
    faFloppyDisk,
    faArrowRightToBracket,
    faArrowUpRightFromSquare,
    faPlus,
    faCirclePause,
    faTriangleExclamation
)

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app");
