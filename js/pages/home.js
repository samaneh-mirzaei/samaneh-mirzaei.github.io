import { NAVIGATION } from "../data/navigation.js";
import { PageShell } from "../components/PageShell.js";
import { Hero } from "../sections/Hero.js";
import { About } from "../sections/About.js";
import { Resume } from "../sections/Resume.js";

export const HomePage = () =>
	PageShell({
		nav: NAVIGATION.home,
		main: Hero() + About() + Resume(),
	});
