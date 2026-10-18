import { i18n, en } from "../i18n/markup.js";
import { Section } from "../components/Section.js";

/** Resume call-to-action band. */
export const Resume = () =>
	Section({
		id: "resume",
		titleKey: "resume.title",
		containerClass: "resume",
		children: `
<p ${i18n("resume.text")}>${en("resume.text")}</p>
<a class="btn" href="assets/resume.pdf" target="_blank" rel="noopener" download ${i18n("resume.button")}>${en("resume.button")}</a>`,
	});
