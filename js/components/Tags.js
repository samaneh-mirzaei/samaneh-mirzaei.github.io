import { escapeHtml } from "../utils/html.js";
import { i18n, en } from "../i18n/markup.js";
import { Placeholder } from "./Placeholder.js";

/**
 * Pill list.
 * @param items     strings, or { key } for a translatable label
 * @param emptyKey  i18n key of a placeholder shown when `items` is empty
 */
export function Tags(items = [], { emptyKey } = {}) {
	const pills = items.map((item) =>
		typeof item === "string"
			? `<li>${escapeHtml(item)}</li>`
			: `<li ${i18n(item.key)}>${en(item.key)}</li>`,
	);
	if (!pills.length && emptyKey) pills.push(Placeholder(emptyKey, "li"));
	return `<ul class="tags">${pills.join("")}</ul>`;
}
