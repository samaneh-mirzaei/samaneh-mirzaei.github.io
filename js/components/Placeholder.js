import { i18n, en } from "../i18n/markup.js";

/** Dashed "[Add …]" marker for info still to be supplied. */
export const Placeholder = (key, tag = "span") =>
	`<${tag} class="ph" ${i18n(key)}>${en(key)}</${tag}>`;
