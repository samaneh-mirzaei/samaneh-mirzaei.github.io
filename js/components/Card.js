/** Basic card wrapper. `tag`/`className` let callers reuse it for articles etc. */
export const Card = ({ tag = "div", className = "", id = "", children = "" }) =>
	`<${tag}${id ? ` id="${id}"` : ""} class="${`card ${className}`.trim()}">${children}</${tag}>`;
