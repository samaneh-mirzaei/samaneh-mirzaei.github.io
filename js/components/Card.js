/** Basic card wrapper. `tag`/`className` let callers reuse it for articles etc. */
export const Card = ({ tag = "div", className = "", children = "" }) =>
	`<${tag} class="${`card ${className}`.trim()}">${children}</${tag}>`;
