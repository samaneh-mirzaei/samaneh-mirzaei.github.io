import { CONFIG, DEFAULT_LANG, STORAGE_KEYS, LANG_EVENT } from "../config.js";
import { translate } from "../i18n/translate.js";
import { readStorage, writeStorage } from "../utils/storage.js";

// "aria-label:a11y.social,alt:hero.alt" -> [["aria-label","a11y.social"], ["alt","hero.alt"]]
function parseAttrPairs(el) {
	return (el.dataset.i18nAttr || "")
		.split(",")
		.filter(Boolean)
		.map((pair) => {
			const i = pair.indexOf(":");
			return [pair.slice(0, i), pair.slice(i + 1)];
		});
}

/** English (default) / Persian switching. Translates everything tagged with data-i18n(-attr). */
export function initLanguage() {
	const html = document.documentElement;
	const toggle = document.getElementById("lang-toggle");

	function applyLanguage(lang, save = true) {
		if (lang !== "fa") lang = "en";
		html.lang = lang;
		html.dir = lang === "fa" ? "rtl" : "ltr";

		document.querySelectorAll("[data-site-name]").forEach((el) => {
			el.textContent = lang === "fa" ? CONFIG.nameFa : CONFIG.name;
		});

		document.querySelectorAll("[data-i18n], [data-i18n-attr]").forEach((el) => {
			if (el.dataset.i18n) el.textContent = translate(lang, el.dataset.i18n);
			parseAttrPairs(el).forEach(([attr, key]) =>
				el.setAttribute(attr, translate(lang, key)),
			);
		});

		// Toggle state: "on" = Persian
		toggle?.setAttribute("aria-checked", String(lang === "fa"));

		// Let other features (e.g. the theme menu) react.
		document.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: { lang } }));

		if (save) writeStorage(STORAGE_KEYS.lang, lang);
	}

	toggle?.addEventListener("click", () =>
		applyLanguage(html.lang === "fa" ? "en" : "fa"),
	);

	applyLanguage(readStorage(STORAGE_KEYS.lang, DEFAULT_LANG), false);
}
