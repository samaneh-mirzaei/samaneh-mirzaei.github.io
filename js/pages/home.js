import { NAVIGATION } from "../data/navigation.js";
import { PageShell } from "../components/PageShell.js";
import { Hero } from "../sections/Hero.js";
import { About } from "../sections/About.js";
import { Skills } from "../sections/Skills.js";
import { Projects } from "../sections/Projects.js";
import { Learning } from "../sections/Learning.js";
import { Contact } from "../sections/Contact.js";
import { Resume } from "../sections/Resume.js";

export const HomePage = () =>
	PageShell({
		nav: NAVIGATION.home,
		main: Hero() + About() + Skills() + Projects() + Learning() + Resume() + Contact(),
	});
