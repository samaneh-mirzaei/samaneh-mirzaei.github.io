import { FEATURES } from "../config.js";
import { NAVIGATION } from "../data/navigation.js";
import { PageShell } from "../components/PageShell.js";
import { PageHero } from "../sections/PageHero.js";
import { Projects } from "../sections/Projects.js";
import { CaseStudies } from "../sections/CaseStudies.js";
import { Learning } from "../sections/Learning.js";

export const DetailsPage = () =>
	PageShell({
		nav: NAVIGATION.details,
		main:
			PageHero() +
			Projects() +
			(FEATURES.caseStudies ? CaseStudies() : "") +
			Learning(),
		footer: { showBackLink: true },
	});
