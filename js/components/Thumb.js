import { escapeHtml } from "../utils/html.js";

/** 16:10 lazy-loaded thumbnail image (see .thumb in project-card.css). */
export const Thumb = ({ src, alt }) =>
	`<img class="thumb" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="640" height="400" loading="lazy">`;
