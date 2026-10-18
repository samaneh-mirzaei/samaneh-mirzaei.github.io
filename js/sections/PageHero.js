import { i18n, en } from "../i18n/markup.js";

/** Top block of the details page. */
export const PageHero = () => `
<section class="page-hero" id="top">
	<div class="container">
		<a class="back" href="index.html" ${i18n("d.back")}>${en("d.back")}</a>
		<p class="eyebrow" ${i18n("d.eyebrow")}>${en("d.eyebrow")}</p>
		<h1 ${i18n("d.title")}>${en("d.title")}</h1>
		<p class="intro" ${i18n("d.intro")}>${en("d.intro")}</p>
	</div>
</section>`;
