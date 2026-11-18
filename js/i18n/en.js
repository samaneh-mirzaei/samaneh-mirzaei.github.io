// English source text. Keys are shared with fa.js — add a key here first,
// then (optionally) translate it in fa.js. Missing FA keys fall back to English.
import { CONFIG } from "../config.js";

export const EN = {
"art.cat.role":"Animator",
"art.render.role":"3D artist",
"projects.ai":"AI & machine learning",
"projects.backend":"Backend development",
"projects.frontend":"Frontend development",
"projects.games":"Game development",
"projects.desktop":"Desktop tools",
"projects.browse":"Browse project categories",
"art.title":"3D & animation",
"art.intro":"Blender studies in rendering and motion",
"art.cat.title":"Cat & chopsticks",
"art.cat.desc":"A short Blender animation combining 2D and 3D elements.",
"art.render.title":"Mug & donut",
"art.render.desc":"A Blender realism study featuring a character mug, coffee, and a chocolate donut.",
"art.render.alt":"Blender render of a smiling ceramic mug and a chocolate donut on a wooden tray",
"art.open":"Open the full-size mug and donut render",
"art.play":"Play animation",
"art.pause":"Pause animation",
"art.animation":"2D / 3D animation",
"art.rendering":"3D rendering",
  "d.p7.title": "Basalam Marketplace API",
  "d.p7.desc": "A Basalam-inspired marketplace backend built as a bootcamp project. Includes JWT authentication, role-based access, product search, carts, and wallet checkout. Stock updates, wallet debits, and orders commit together, with duplicate-checkout protection.",
  "d.p7.role": "Backend developer",
  "spotlight.label": "Project spotlight",
  "spotlight.browse": "Project preview. Use arrow keys, scroll, or swipe to browse.",
  "spotlight.previous": "Previous project",
  "spotlight.next": "Next project",
  "spotlight.choose": "Choose a project",
  "spotlight.help": "Hover a number, scroll, or use the arrows",
	"brand.label": CONFIG.name,
	"nav.contact": "Contact",
	"nav.menu": "Menu",
	"hero.profession": "AI & full-stack developer",
	"hero.game": "& game developer",
	"hero.projects": "Explore projects",
	"hero.contact": "Get in touch",
	"hero.featured": "Project spotlight / 06",
	"hero.workAlt": "SafePlay Companion dashboard showing playback controls, guide search and content filters",
	"hero.note": "From AI systems to playable worlds",
	"skills.intro": "The languages, frameworks, and tools behind my work",
	"skills.languages": "Programming languages",
	"skills.frontend": "Frontend development",
	"skills.backend": "Backend development",
	"skills.ai": "AI & machine learning",
	"skills.games": "Game development",
	"skills.tools": "Tools & technologies",
	"contact.label": "Have a project in mind?",
	"contact.title": "Let’s build something.",
	"contact.text": "Open to internships, full-time roles, and open-source collaborations. Tell me what you’re working on.",
	"contact.cta": "Send me an email",
	// ----- Document meta -----
	"meta.title": `${CONFIG.name} — AI & Full-Stack Developer | Game Developer`,
	"meta.description": `Portfolio of ${CONFIG.name}, an AI and full-stack developer and game developer exploring intelligent systems, web technologies, and interactive experiences.`,

	// ----- Accessibility labels -----
	"a11y.skip": "Skip to content",
	"a11y.mainNav": "Main",
	"a11y.language": "Language",
	"a11y.langSwitch": "Persian language",
	"a11y.changeTheme": "Change color theme",
	"a11y.themeMenu": "Color theme",
	"a11y.social": "Social links",

	// ----- Navigation -----
	"nav.home": "Home",
	"nav.about": "About",
	"nav.resume": "Resume",
	"nav.projects": "Projects",
	"nav.cases": "Case studies",
	"nav.learning": "Learning",
	"theme.label": "Theme",

	// ----- Hero -----
	"hero.hello": "AI, web & game development",
	"hero.alt": `Portrait of ${CONFIG.name}`,
	"hero.tagline":
		"From AI systems to playable worlds",
	"hero.intro":
		"I'm a Computer Engineering student building AI applications, full-stack systems, and story-driven games. My work spans computer vision, retrieval-augmented generation, and tools for everyday use.",

	// ----- About -----
	"about.title": "About",
	"about.background.title": "Background",
	"about.background.text":
		"I'm a Computer Engineering student with hands-on experience building AI-powered applications and full-stack systems for real clients. My projects include a deep learning and computer vision application for four-class brain tumor classification, achieving 98.99% overall accuracy, and two retrieval-augmented generation (RAG) systems developed for a startup. I also build small story-driven and pixel-art games and have created around 60 HTML, CSS, and JavaScript webpage templates.",
	"about.more": "Explore projects →",
	"about.interests.title": "Interests",
	"about.interests.text":
		"AI and game development are my main passions. I explore AI to build intelligent applications and use my frontend and backend skills to bring my ideas to life. Outside of coding, I enjoy gaming, art, and creating 2D animations and 3D assets with Blender.",
	"about.skills.title": "Skills",
	"about.skills.linux": "Linux Basics",
	"about.goals.title": "Goals",
	"about.goals.text":
		"I'm working toward a career in AI engineering and game development, where I can combine intelligent systems with creative interactive experiences. I hope to bring a long-standing game idea to life and build developer tools, including a FastAPI-based platform that combines API testing, monitoring, and simulated requests. I'm also looking for opportunities to gain experience through internships, full-time roles, and open-source contributions.",

	// ----- Resume -----
	"resume.title": "Resume",
	"resume.text":
		"Want the full picture? Download my resume for details on experience and education.",
	"resume.button": "Download resume (PDF)",

	// ----- Footer -----
	"footer.rights": ". All rights reserved.",
	"footer.top": "Back to top ↑",

	// ----- details.html -----
	"d.meta.title": `Projects & Learning | ${CONFIG.name}`,
	"d.meta.description": `Project details, case studies, and learning journey of ${CONFIG.name}.`,
	"d.back": "← Back to home",
	"d.eyebrow": "Portfolio details",
	"d.title": "Projects, case studies & learning",
	"d.intro": "A closer look at what I've built and how I keep learning.",
	"d.thumb": "Image placeholder",

	"d.projects.title": "Projects",
	"d.projects.lede": "A selection of the projects I've worked on.",
	"d.p1.title": "Brain Tumor Classification",
	"d.p1.desc":
		"A deep learning and computer vision application that classifies brain tumors into four classes, reaching 98.99% overall accuracy.",
	"d.p2.title": "RAG Assistant for Science Articles",
	"d.p2.desc": "A RAG system built on science articles for a startup.",
	"d.p3.title": "Story-Driven & Pixel-Art Games",
	"d.p3.desc": "Small story-driven and pixel-art games.",
	"d.p4.title": "HTML, CSS & JavaScript Webpage Templates",
	"d.p4.desc": "Around 60 webpage templates built with HTML, CSS, and JavaScript.",
	"d.p5.title": "RAG Assistant for Khamenei.ir Content",
	"d.p5.desc":
		"A RAG system built for a startup, using content from the Khamenei.ir website and implemented with Flask.",
	"d.p6.title": "SafePlay Companion",
	"d.p6.desc": "A Windows companion for mpv that reads parental guides and skips selected scenes using timestamped intervals. Supports movie and episode guides, manual scene editing, and edition confirmation before automatic skipping. It does not analyze video or audio.",
	"d.p6.role": "Desktop application developer",
	"d.role": "Role:",
	"d.links": "Links:",

	"d.cases.title": "Project details",
	"d.cases.lede": "Case studies: the problem, approach, implementation, and results.",
	"d.case1.title": "Case study: Brain Tumor Classification",
	"d.case1.problem":
		"Automatically classify brain tumors into four classes using computer vision.",
	"d.case1.results": "98.99% overall accuracy.",
	"d.problem": "Problem",
	"d.approach": "Approach",
	"d.impl": "Implementation",
	"d.results": "Results",

	"d.learning.title": "Certificates & learning",
	"d.learning.lede": "Certificates, courses, workshops, and learning achievements.",
	"d.l.cert": "Certificate",
	"d.l.course": "Course or workshop",
	"d.l.ach": "Learning achievement",
	"d.issuer": "Issuer:",
	"d.date": "Date:",
	"d.verify": "Verification link:",

	// ----- Placeholders (shown until real info is added) -----
	"d.ph.role": "[Add your role]",
	"d.ph.link": "[Add link]",
	"d.ph.tech": "[Add technologies]",
	"d.ph.title": "[Add title]",
	"d.ph.text": "[Add details here]",
	"d.ph.value": "[Add]",
};
