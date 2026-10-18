import { CONFIG } from "../config.js";
import { i18n, en, i18nAttr } from "../i18n/markup.js";
import { SocialLinks } from "../components/SocialLinks.js";

/** Home page intro: name, tagline, social links, portrait. */
export const Hero = () => `
<section class="hero" id="top">
	<div class="container hero-grid">
		<div class="hero-text">
			<p class="eyebrow" ${i18n("hero.hello")}>${en("hero.hello")}</p>
			<h1 data-site-name>${CONFIG.name}</h1>
			<p class="tagline" ${i18n("hero.tagline")}>${en("hero.tagline")}</p>
			<p class="intro" ${i18n("hero.intro")}>${en("hero.intro")}</p>
			${SocialLinks()}
		</div>
		<figure class="hero-photo">
			<img src="assets/profile.jpg" ${i18nAttr("alt", "hero.alt")} width="400" height="400">
		</figure>
	</div>
</section>`;
