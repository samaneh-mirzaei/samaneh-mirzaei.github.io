import { i18n, en } from "../i18n/markup.js";

/**
 * Definition list of label/value rows.
 * @param rows  [{ labelKey, value }] — `value` is ready-made HTML
 */
export const MetaList = (rows) =>
	`<dl class="meta">${rows
		.map(
			({ labelKey, value }) =>
				`<div><dt ${i18n(labelKey)}>${en(labelKey)}</dt><dd>${value}</dd></div>`,
		)
		.join("")}</dl>`;
