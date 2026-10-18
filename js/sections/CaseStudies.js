import { CASE_STUDIES } from "../data/caseStudies.js";
import { Section } from "../components/Section.js";
import { CaseStudyCard } from "../components/CaseStudyCard.js";

export const CaseStudies = () =>
	Section({
		id: "case-studies",
		titleKey: "d.cases.title",
		titleId: "cases-title",
		ledeKey: "d.cases.lede",
		children: `<div class="case-grid">${CASE_STUDIES.map(CaseStudyCard).join("")}</div>`,
	});
