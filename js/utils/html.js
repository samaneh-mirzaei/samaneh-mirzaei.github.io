const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Escape text before putting it inside an HTML template string. */
export const escapeHtml = (value) =>
	String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);
