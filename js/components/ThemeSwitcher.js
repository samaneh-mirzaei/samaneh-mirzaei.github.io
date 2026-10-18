import { i18n, en, i18nAttr } from "../i18n/markup.js";

/** Theme button + (initially empty) menu. Options are filled by features/theme.js. */
export const ThemeSwitcher = () => `
<div class="theme">
	<button class="theme-btn" id="theme-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="theme-menu" ${i18nAttr("aria-label", "a11y.changeTheme")}>
		<span class="swatches" id="theme-current" aria-hidden="true"></span>
		<span class="theme-label" ${i18n("theme.label")}>${en("theme.label")}</span>
	</button>
	<div class="theme-menu" id="theme-menu" role="group" ${i18nAttr("aria-label", "a11y.themeMenu")} hidden></div>
</div>`;
