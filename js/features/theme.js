import { DEFAULT_THEME, STORAGE_KEYS, LANG_EVENT } from "../config.js";
import { THEMES } from "../data/themes.js";
import { readStorage, writeStorage } from "../utils/storage.js";

const ENABLED_THEMES = THEMES.filter((t) => t.enabled !== false);

const swatches = (colors) => colors.map((c) => `<i style="background:${c}"></i>`).join("");
const themeName = (theme, lang) => (lang === "fa" && theme.nameFa) || theme.name;

/** Fills the theme menu and wires up open/close, selection and persistence. */
export function initThemes() {
	const button = document.getElementById("theme-btn");
	const menu = document.getElementById("theme-menu");
	const current = document.getElementById("theme-current");
	if (!button || !menu) return;

	// --- build one button per theme ---
	const options = ENABLED_THEMES.map((theme) => {
		const option = document.createElement("button");
		option.type = "button";
		option.className = "theme-opt";
		option.dataset.theme = theme.id;
		option.innerHTML = `<span>${themeName(theme, document.documentElement.lang)}</span><span class="swatches" aria-hidden="true">${swatches(theme.colors)}</span>`;
		option.addEventListener("click", () => applyTheme(theme.id));
		menu.appendChild(option);
		return option;
	});

	function applyTheme(id, save = true) {
		const theme = ENABLED_THEMES.find((t) => t.id === id) || ENABLED_THEMES[0];
		document.documentElement.dataset.theme = theme.id;
		current.innerHTML = swatches(theme.colors);
		options.forEach((o) =>
			o.setAttribute("aria-pressed", String(o.dataset.theme === theme.id)),
		);
		if (save) writeStorage(STORAGE_KEYS.theme, theme.id);
	}

	// --- open / close ---
	const setOpen = (open) => {
		menu.hidden = !open;
		button.setAttribute("aria-expanded", String(open));
	};
	button.addEventListener("click", () => setOpen(menu.hidden));
	document.addEventListener("click", (e) => {
		if (!e.target.closest(".theme")) setOpen(false);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !menu.hidden) {
			setOpen(false);
			button.focus();
		}
	});

	// --- theme names follow the language ---
	document.addEventListener(LANG_EVENT, (e) => {
		options.forEach((o) => {
			const theme = THEMES.find((t) => t.id === o.dataset.theme);
			o.firstElementChild.textContent = themeName(theme, e.detail.lang);
		});
	});

	applyTheme(readStorage(STORAGE_KEYS.theme, DEFAULT_THEME), false);
}
