import { CONFIG, SOCIAL_FALLBACKS } from "../config.js";
import { SOCIAL_ICONS, SOCIAL_PLATFORMS } from "../data/icons.js";
import { i18nAttr } from "../i18n/markup.js";

/** Icon links (GitHub, LinkedIn). URLs come from CONFIG.social. */
export function SocialLinks() {
	const items = SOCIAL_PLATFORMS.map(({ id, label }) => {
		const href = CONFIG.social[id] || SOCIAL_FALLBACKS[id];
		return `<li><a class="icon-link" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${SOCIAL_ICONS[id]}"/></svg></a></li>`;
	});
	return `<ul class="social" ${i18nAttr("aria-label", "a11y.social")}>${items.join("")}</ul>`;
}
