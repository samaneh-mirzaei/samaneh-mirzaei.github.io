import { FEATURES } from "../config.js";

// Header navigation per page. `key` is an i18n key (see js/i18n/en.js).
export const NAVIGATION = {
	home: {
		brandHref: "#top",
		links: [
			{ href: "#about", key: "nav.about" },
			{ href: "#resume", key: "nav.resume" },
		],
	},
	details: {
		brandHref: "index.html",
		links: [
			{ href: "index.html", key: "nav.home" },
			{ href: "#projects", key: "nav.projects" },
			...(FEATURES.caseStudies ? [{ href: "#case-studies", key: "nav.cases" }] : []),
			{ href: "#learning", key: "nav.learning" },
		],
	},
};
