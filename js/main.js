// ===== Editable site configuration =====
const CONFIG = {
	name: "Samaneh Mirzaei",
	social: {
		github: "https://github.com/samaneh-mirzaei",
		linkedin: "https://www.linkedin.com/in/your-username",
	},
};

// ===== Themes (ids match [data-theme] blocks in css/style.css) =====
const DEFAULT_THEME = "pim";
const STORAGE_KEY = "portfolio-theme";
const THEMES = [
	{
		id: "pim",
		name: "PIM",
		colors: ["#fcfbfc", "#fcf291", "#febcfe", "#5e4af0", "#302534"],
	},
	{
		id: "halloween",
		name: "Halloween",
		colors: ["#06060e", "#361c7d", "#d34f0d", "#f99e90"],
	},
	// { id: "oil", name: "Oil", colors: ["#fbf5ef", "#f2d3ab", "#c69fa5", "#8b6d9c", "#494d7e", "#272744"] },
	{
		id: "twilight",
		name: "Twilight",
		colors: ["#fbbbad", "#ee8695", "#4a7a96", "#333f58", "#292831"],
	},
	{
		id: "icecream",
		name: "Ice Cream",
		colors: ["#7c3f58", "#eb6b6f", "#f9a875", "#fff6d3"],
	},
	// { id: "latenight", name: "Late Night", colors: ["#282d3c", "#5b5d70", "#74838c", "#ffc4b8", "#f69197"] },
	{
		id: "bittersweet",
		name: "Bitter Sweet",
		colors: ["#282328", "#545c7e", "#c56981", "#a3a29a"],
	},
	{
		id: "mold",
		name: "Mold",
		colors: ["#191b1a", "#294257", "#579c9a", "#99c9b3"],
	},
	{
		id: "watermelon",
		name: "Watermelon",
		colors: ["#fcdeea", "#ff4d6d", "#265935", "#012824"],
	},
	{
		id: "nightsky",
		name: "Night Sky",
		colors: ["#131626", "#4d4d80", "#e6a1cf", "#ffe6ea"],
	},
];

function initThemes() {
	const btn = document.getElementById("theme-btn");
	const menu = document.getElementById("theme-menu");
	const current = document.getElementById("theme-current");
	if (!btn || !menu) return;
	const dots = (c) => c.map((h) => `<i style="background:${h}"></i>`).join("");
	const opts = THEMES.map((t) => {
		const b = document.createElement("button");
		b.type = "button";
		b.className = "theme-opt";
		b.dataset.theme = t.id;
		b.innerHTML = `<span>${t.name}</span><span class="swatches" aria-hidden="true">${dots(t.colors)}</span>`;
		b.addEventListener("click", () => apply(t.id));
		menu.appendChild(b);
		return b;
	});
	function apply(id, save = true) {
		const t = THEMES.find((x) => x.id === id) || THEMES[0];
		document.documentElement.dataset.theme = t.id;
		current.innerHTML = dots(t.colors);
		opts.forEach((o) =>
			o.setAttribute("aria-pressed", String(o.dataset.theme === t.id)),
		);
		if (save)
			try {
				localStorage.setItem(STORAGE_KEY, t.id);
			} catch (e) {}
	}
	const toggle = (open) => {
		menu.hidden = !open;
		btn.setAttribute("aria-expanded", String(open));
	};
	btn.addEventListener("click", () => toggle(menu.hidden));
	document.addEventListener("click", (e) => {
		if (!e.target.closest(".theme")) toggle(false);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !menu.hidden) {
			toggle(false);
			btn.focus();
		}
	});
	let saved = DEFAULT_THEME;
	try {
		saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
	} catch (e) {}
	apply(saved, false);
}

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelectorAll("[data-site-name]")
		.forEach((el) => (el.textContent = CONFIG.name));
	document.querySelectorAll("[data-social]").forEach((el) => {
		const url = CONFIG.social[el.dataset.social];
		if (url) el.href = url;
	});
	const year = document.getElementById("year");
	if (year) year.textContent = new Date().getFullYear();

	initThemes();

	// Scroll reveal
	const items = document.querySelectorAll(
		".hero-text, .hero-photo, .card, .resume",
	);
	items.forEach((el) => el.classList.add("reveal"));
	if (!("IntersectionObserver" in window))
		return items.forEach((el) => el.classList.add("visible"));
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("visible");
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.12 },
	);
	items.forEach((el) => io.observe(el));
});
