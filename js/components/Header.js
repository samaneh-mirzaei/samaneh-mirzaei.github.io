import { CONFIG } from "../config.js";
import { i18n, en, i18nAttr } from "../i18n/markup.js";
import { LangToggle } from "./LangToggle.js";
import { ThemeSwitcher } from "./ThemeSwitcher.js";
export function Header({brandHref,links}) {
  return `<header class="site-header">
  <nav class="container nav" ${i18nAttr("aria-label","a11y.mainNav")}>
    <a class="brand" href="${brandHref}" ${i18nAttr("aria-label","brand.label")}><span class="brand-mark" aria-hidden="true">SM<span>↗</span></span><span data-site-name>${CONFIG.name}</span></a>
    <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="main-links" ${i18nAttr("aria-label","nav.menu")}><span ${i18n("nav.menu")}>${en("nav.menu")}</span><span class="menu-symbol" aria-hidden="true">+</span></button>
    <ul class="nav-links" id="main-links">${links.map(({href,key})=>`<li><a href="${href}" ${i18n(key)}>${en(key)}</a></li>`).join("")}</ul>
    <div class="nav-tools">${LangToggle()}${ThemeSwitcher()}</div>
  </nav></header>`;
}
