import { PROJECTS } from "../data/projects.js";
import { Section } from "../components/Section.js";
import { ProjectCard } from "../components/ProjectCard.js";

export const Projects = () =>
	Section({
		id: "projects",
		titleKey: "d.projects.title",
		ledeKey: "d.projects.lede",
		children: `<div class="proj-grid">${PROJECTS.map(ProjectCard).join("")}</div>`,
	});
