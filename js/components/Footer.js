import { CONFIG } from "../config.js";
import { i18n, en } from "../i18n/markup.js";
import { SocialLinks } from "./SocialLinks.js";

/** @param showBackLink  adds a "← Back to home" link (used on details.html) */
export function Footer({ showBackLink = false } = {}) {
	const backLink = showBackLink
		? `<a class="to-top" href="index.html" ${i18n("d.back")}>${en("d.back")}</a>`
		: "";

	return `
<footer class="site-footer">
	<div class="container footer-inner">
		<p>&copy; <span id="year">${new Date().getFullYear()}</span> <span data-site-name>${CONFIG.name}</span><span ${i18n("footer.rights")}>${en("footer.rights")}</span></p>
		${SocialLinks()}
		${backLink}
		<a class="to-top" href="#top" ${i18n("footer.top")}>${en("footer.top")}</a>
	</div>
</footer>`;
}
