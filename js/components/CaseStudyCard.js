import { i18n, en } from "../i18n/markup.js";
import { Card } from "./Card.js";
import { Placeholder } from "./Placeholder.js";

// Parts of a field: { key } -> translated text, { placeholder: true } -> dashed marker
const renderParts = (parts) =>
	parts
		.map((part) =>
			part.placeholder
				? Placeholder("d.ph.text")
				: `<span ${i18n(part.key)}>${en(part.key)}</span>`,
		)
		.join("\n");

const FIELDS = [
	{ prop: "problem", labelKey: "d.problem" },
	{ prop: "approach", labelKey: "d.approach" },
	{ prop: "implementation", labelKey: "d.impl" },
	{ prop: "results", labelKey: "d.results" },
];

/** One case study (data/caseStudies.js). */
export function CaseStudyCard(study) {
	const title = study.title.placeholder
		? `<h3>${Placeholder("d.ph.title")}</h3>`
		: `<h3 ${i18n(study.title.key)}>${en(study.title.key)}</h3>`;

	const rows = FIELDS.map(
		({ prop, labelKey }) =>
			`<div><dt ${i18n(labelKey)}>${en(labelKey)}</dt><dd>${renderParts(study[prop])}</dd></div>`,
	).join("");

	return Card({
		tag: "article",
		className: "case",
		children: `${title}<dl>${rows}</dl>`,
	});
}
