import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	faSignal,
	faListUl,
	faBriefcase,
	faRocket,
	faThumbsUp,
	faGear,
	faUsers,
	faFilm,
	faImage,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
	faLinkedin,
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
	faLinkedin,
	faFacebook,
	faInstagram,
	faTwitter,
	faSignal,
	faListUl,
	faClock,
	faBriefcase,
	faRocket,
	faThumbsUp,
	faGear,
	faUsers,
	faFilm,
	faImage
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
