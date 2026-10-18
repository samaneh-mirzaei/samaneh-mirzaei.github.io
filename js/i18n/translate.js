import { EN } from "./en.js";
import { FA } from "./fa.js";

/** Text for `key` in `lang` ("en" | "fa"). Falls back to English. */
export function translate(lang, key) {
	return (lang === "fa" && FA[key]) || EN[key];
}
