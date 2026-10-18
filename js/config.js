// ===== Editable site configuration =====
export const CONFIG = {
	name: "Samaneh Mirzaei",
	nameFa: "سمانه میرزایی",
	social: {
		github: "https://github.com/samaneh-mirzaei",
		linkedin: "",
	},
};

// Used when a CONFIG.social entry above is left empty.
export const SOCIAL_FALLBACKS = {
	github: "https://github.com/samaneh-mirzaei",
	linkedin: "https://www.linkedin.com/in/your-username",
};

// Turn optional sections on/off.
export const FEATURES = {
	caseStudies: false, // the "Project details" section + its nav link on details.html
};

export const DEFAULT_THEME = "pim";
export const DEFAULT_LANG = "en";

// NOTE: js/theme-init.js (runs before first paint) uses the same two keys.
export const STORAGE_KEYS = {
	theme: "portfolio-theme",
	lang: "portfolio-lang",
};

// Fired on `document` after the language changes (detail: { lang }).
export const LANG_EVENT = "portfolio:languagechange";
