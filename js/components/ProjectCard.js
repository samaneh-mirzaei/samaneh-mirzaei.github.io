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
export function ProjectCard({ key, image, tags, role, roleKey, links }, index = 0) {
	return Card({
		tag: "article",
		className: `proj project-card project-${index + 1}`,
		id: `project-${key.replaceAll(".", "-")}`,
		children: `
${image ? `<div class="project-image"><span class="project-index" aria-hidden="true">${String(index + 1).padStart(2,"0")}</span>${Thumb(image)}</div>` : ""}
<h4 ${i18n(`${key}.title`)}>${en(`${key}.title`)}</h4>
<p ${i18n(`${key}.desc`)}>${en(`${key}.desc`)}</p>
${tags?.length ? Tags(tags) : ""}
${MetaList([
	{ labelKey: "d.role", value: roleKey ? `<span ${i18n(roleKey)}>${en(roleKey)}</span>` : role ? escapeHtml(role) : Placeholder("d.ph.role") },
	...(links?.length ? [{ labelKey: "d.links", value: linkList(links) }] : []),
])}`,
	});
}
