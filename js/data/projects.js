// Each project's title/description live in the i18n files under `${key}.title`
// and `${key}.desc`. Fill `role` / `links` to replace the dashed placeholders:
//   role: "Lead developer"
//   links: [{ label: "GitHub", url: "https://..." }]
//
// To use a real thumbnail, set image.src. Without `image` a dashed box is shown.
export const PROJECTS = [
	{
		key: "d.p1",
		category: "ai",
		image: {
			src: "assets/projects/brain-tumor-classification.jpg",
			alt: "Screenshot of the brain tumor classification project",
		},
		tags: ["Deep Learning", "Computer Vision", "Keras", "PyTorch"],
		role: "Model designer, application developer",
		links: null,
	},
	{
		key: "d.p2",
		category: "ai",
		image: {
			src: "assets/projects/rag-science-assistant.png",
			alt: "Screenshot of the RAG assistant built on science articles",
		},
		tags: ["RAG", "Tkinter", "LLM", "Python"],
		role: "RAG pipeline designer & developer",
		links: null,
	},
	{
		key: "d.p5",
		category: "ai",
		image: {
			src: "assets/projects/rag-khamenei-assistant.jpg",
			alt: "Screenshot of the RAG assistant built on Khamenei.ir content",
		},
		tags: ["RAG", "Flask", "LLM", "Python"],
		role: "RAG pipeline designer & developer, Project Manager, Web developer",
		links: null,
	},
	{
		key: "d.p3",
		category: "games",
		image: {
			src: "assets/projects/pixel-game-example.jpg",
			alt: "Screenshot of a pixel-art game",
		},
		tags: [], // empty -> "[Add technologies]" placeholder
		role: "Game Developer, 2D Animator",
		links: null,
	},
	{
		key: "d.p4",
		category: "frontend",
		image: {
			src: "assets/projects/divar-temp-example.jpeg",
			alt: "Preview of one of the HTML, CSS and JavaScript webpage templates",
		},
		tags: ["HTML", "CSS", "JavaScript"],
		role: "Frontend Developer",
		links: null,
	},
	{
		key: "d.p6",
		category: "desktop",
		image: {
			src: "assets/projects/safeplay-dashboard.png",
			alt: "SafePlay Companion dashboard with mpv playback status, guide search and content filters",
		},
		tags: ["Python", "PySide6", "mpv JSON IPC", "Windows"],
		roleKey: "d.p6.role",
		links: [{ label: "GitHub", url: "https://github.com/samaneh-mirzaei/safeplay-companion" }],
	},
	{
		key: "d.p7",
		category: "backend",
		image: {
			src: "assets/projects/basalam-api-docs.png",
			alt: "Basalam Marketplace Swagger documentation showing customer, authentication and administration endpoints",
		},
		tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
		roleKey: "d.p7.role",
		links: [{ label: "GitHub", url: "https://github.com/samaneh-mirzaei/basalam-clone" }],
	},
];
