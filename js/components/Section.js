import { i18n, en } from "../i18n/markup.js";

/**
 * Titled page section.
 * @param id             anchor id (e.g. "about" -> #about)
 * @param titleKey       i18n key for the <h2>
 * @param titleId        id of the <h2> (defaults to `${id}-title`)
 * @param ledeKey        optional i18n key for the intro line under the title
 * @param containerClass extra class on the inner .container
 */
export function Section({
	id,
	titleKey,
	titleId = `${id}-title`,
	ledeKey,
	containerClass = "",
	children,
}) {
	const lede = ledeKey
		? `<p class="section-lede" ${i18n(ledeKey)}>${en(ledeKey)}</p>`
		: "";

	return `
<section class="section" id="${id}" aria-labelledby="${titleId}">
	<div class="container ${containerClass}">
		<h2 id="${titleId}" ${i18n(titleKey)}>${en(titleKey)}</h2>
		${lede}
		${children}
	</div>
</section>`;
}
