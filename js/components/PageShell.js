import { i18n, en } from "../i18n/markup.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

/** Layout shared by every page: skip link, header, <main>, footer. */
export const PageShell = ({ nav, main, footer }) => `
<a class="skip" href="#main" ${i18n("a11y.skip")}>${en("a11y.skip")}</a>
${Header(nav)}
<main id="main">${main}</main>
${Footer(footer)}`;
