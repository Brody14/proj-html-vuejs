import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret, faLinkedin, faFacebook, faInstagram, faTwitter);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
