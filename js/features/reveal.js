const REVEAL_SELECTOR = ".about-grid, .skills-grid, .project-card, .resume, .contact-grid";

/** Fade/slide elements in the first time they scroll into view. */
export function initReveal() {
	const items = document.querySelectorAll(REVEAL_SELECTOR);
	if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	items.forEach((el) => el.classList.add("reveal"));

	if (!("IntersectionObserver" in window)) {
		items.forEach((el) => el.classList.add("visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add("visible");
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.12 },
	);
	items.forEach((el) => observer.observe(el));
}
