import { CONFIG } from "../config.js";
import { i18n, en, i18nAttr } from "../i18n/markup.js";
import { LangToggle } from "./LangToggle.js";
import { ThemeSwitcher } from "./ThemeSwitcher.js";

/**
 * @param brandHref  where the site name links to
 * @param links      [{ href, key }] nav items (see data/navigation.js)
 */
export function Header({ brandHref, links }) {
	const items = links
		.map(
			({ href, key }) =>
				`<li><a href="${href}" ${i18n(key)}>${en(key)}</a></li>`,
		)
		.join("");

	return `
<header class="site-header">
	<nav class="container nav" ${i18nAttr("aria-label", "a11y.mainNav")}>
		<a class="brand" href="${brandHref}" data-site-name>${CONFIG.name}</a>
		<div class="nav-right">
			<ul class="nav-links">${items}</ul>
			${LangToggle()}
			${ThemeSwitcher()}
		</div>
	</nav>
</header>`;
}
