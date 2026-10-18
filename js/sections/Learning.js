import { CERTIFICATES } from "../data/certificates.js";
import { Section } from "../components/Section.js";
import { CertificateCard } from "../components/CertificateCard.js";

export const Learning = () =>
	Section({
		id: "learning",
		titleKey: "d.learning.title",
		ledeKey: "d.learning.lede",
		children: `<div class="proj-grid">${CERTIFICATES.map(CertificateCard).join("")}</div>`,
	});
