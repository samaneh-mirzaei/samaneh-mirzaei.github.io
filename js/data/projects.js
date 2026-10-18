// Each project's title/description live in the i18n files under `${key}.title`
// and `${key}.desc`. Fill `role` / `links` to replace the dashed placeholders:
//   role: "Lead developer"
//   links: [{ label: "GitHub", url: "https://..." }]
//
// To use a real thumbnail, set image.src. Without `image` a dashed box is shown.
export const PROJECTS = [
	{
		key: "d.p1",
		image: {
			src: "assets/projects/brain-tumor-classification.jpg",
			alt: "Screenshot of the brain tumor classification project",
		},
		tags: ["Deep Learning", "Computer Vision", "Keras", "PyTorch"],
		role: null,
		links: null,
	},
	{
		key: "d.p2",
		image: {
			src: "assets/projects/rag-science-assistant.png",
			alt: "Screenshot of the RAG assistant built on science articles",
		},
		tags: ["RAG", "Tkinter", "LLM", "Python"],
		role: null,
		links: null,
	},
	{
		key: "d.p5",
		image: {
			src: "assets/projects/rag-khamenei-assistant.jpg",
			alt: "Screenshot of the RAG assistant built on Khamenei.ir content",
		},
		tags: ["RAG", "Flask", "LLM", "Python"],
		role: null,
		links: null,
	},
	{
		key: "d.p3",
		image: {
			src: "assets/projects/pixel-game-example.jpg",
			alt: "Screenshot of a pixel-art game",
		},
		tags: [], // empty -> "[Add technologies]" placeholder
		role: null,
		links: null,
	},
	{
		key: "d.p4",
		image: {
			src: "assets/projects/divar-temp-example.jpeg",
			alt: "Preview of one of the HTML, CSS and JavaScript webpage templates",
		},
		tags: ["HTML", "CSS", "JavaScript"],
		role: null,
		links: null,
	},
];
