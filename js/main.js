// Entry point. Each HTML page sets <body data-page="..."> and contains an
// empty <div id="app">; we render that page's components into it, then
// attach behaviour (themes, language, scroll reveal).
import { HomePage } from "./pages/home.js";
import { initProjectHeights } from "./features/projectHeights.js";
import { initArtVideo } from "./features/artVideo.js";
import { initThemes } from "./features/theme.js";
import { initLanguage } from "./features/language.js";
import { initSpotlight } from "./features/spotlight.js";
import { initNavigation } from "./features/navigation.js";
import { initReveal } from "./features/reveal.js";

const PAGES = {
	home: HomePage,
};

const page = document.body.dataset.page || "home";
const app = document.getElementById("app");

if (app && PAGES[page]) {
	app.innerHTML = PAGES[page]();
	initThemes(); // before language: language fires an event the theme menu listens to
	initLanguage();
	initNavigation();
	initSpotlight();
	initReveal();
	initArtVideo();
	initProjectHeights();
}
