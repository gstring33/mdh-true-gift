import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMarker, faTrashCan, faCartPlus, faPaperPlane, faCheck, faUser, faXmark, faFloppyDisk, faArrowRightToBracket} from  "@fortawesome/free-solid-svg-icons";

import "./assets/scss/main.scss";

const app = createApp(App);

library.add(faMarker, faTrashCan, faCartPlus, faPaperPlane, faCheck, faUser, faXmark, faFloppyDisk, faArrowRightToBracket)

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app");
