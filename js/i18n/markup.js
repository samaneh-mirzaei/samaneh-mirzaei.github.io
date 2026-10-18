// Helpers for components: they render the English text and tag the element so
// features/language.js can swap it later.
//
//   <h2 ${i18n("about.title")}>${en("about.title")}</h2>
//   <img ${i18nAttr("alt", "hero.alt")}>
import { EN } from "./en.js";
import { escapeHtml } from "../utils/html.js";

/** `data-i18n="key"` — marks an element whose text content is translated. */
export const i18n = (key) => `data-i18n="${key}"`;

/** English text for `key`, escaped and ready for an HTML template. */
export const en = (key) => escapeHtml(EN[key]);

/** `attr="English" data-i18n-attr="attr:key"` — translates an attribute. */
export const i18nAttr = (attr, key) =>
	`${attr}="${escapeHtml(EN[key])}" data-i18n-attr="${attr}:${key}"`;
