import { SKILLS } from "../data/skills.js";
import { i18n, en } from "../i18n/markup.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { Tags } from "../components/Tags.js";

const title = (key) => `<h3 ${i18n(key)}>${en(key)}</h3>`;
const paragraph = (key) => `<p ${i18n(key)}>${en(key)}</p>`;

/** About section: background, interests, skills, goals. */
export const About = () =>
	Section({
		id: "about",
		titleKey: "about.title",
		children: `
<div class="about-grid">
	${Card({
		children: `
${title("about.background.title")}
${paragraph("about.background.text")}
<a class="more-link" href="details.html" ${i18n("about.more")}>${en("about.more")}</a>`,
	})}
	${Card({ children: title("about.interests.title") + paragraph("about.interests.text") })}
	${Card({ children: title("about.skills.title") + Tags(SKILLS) })}
	${Card({ children: title("about.goals.title") + paragraph("about.goals.text") })}
</div>`,
	});
