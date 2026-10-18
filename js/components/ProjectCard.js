import { escapeHtml } from "../utils/html.js";
import { i18n, en } from "../i18n/markup.js";
import { Card } from "./Card.js";
import { Thumb } from "./Thumb.js";
import { Tags } from "./Tags.js";
import { MetaList } from "./MetaList.js";
import { Placeholder } from "./Placeholder.js";

const linkList = (links) =>
	links
		.map(
			({ label, url }) =>
				`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`,
		)
		.join(", ");

/** One project (data/projects.js). Title and description come from i18n. */
export function ProjectCard({ key, image, tags, role, links }) {
	return Card({
		tag: "article",
		className: "proj",
		children: `
${image ? Thumb(image) : ""}
<h3 ${i18n(`${key}.title`)}>${en(`${key}.title`)}</h3>
<p ${i18n(`${key}.desc`)}>${en(`${key}.desc`)}</p>
${Tags(tags, { emptyKey: "d.ph.tech" })}
${MetaList([
	{ labelKey: "d.role", value: role ? escapeHtml(role) : Placeholder("d.ph.role") },
	{
		labelKey: "d.links",
		value: links?.length ? linkList(links) : Placeholder("d.ph.link"),
	},
])}`,
	});
}
