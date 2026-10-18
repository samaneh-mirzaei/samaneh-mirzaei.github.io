import { i18nAttr } from "../i18n/markup.js";

/** ENG / FA switch. Behaviour lives in features/language.js. */
export const LangToggle = () => `
<div class="lang">
	<button class="lang-toggle" id="lang-toggle" type="button" role="switch" aria-checked="false" ${i18nAttr("aria-label", "a11y.langSwitch")}>
		<span class="lang-opt" aria-hidden="true">ENG</span>
		<span class="lang-opt" aria-hidden="true">FA</span>
		<span class="lang-thumb" aria-hidden="true"></span>
	</button>
</div>`;
