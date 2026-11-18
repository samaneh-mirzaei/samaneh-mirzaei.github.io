import { ProjectSpotlight } from "../components/ProjectSpotlight.js";
import { CONFIG } from "../config.js";
import { i18n,en,i18nAttr } from "../i18n/markup.js";
export const Hero=()=>`<section class="hero" id="top" aria-labelledby="hero-name"><div class="container hero-grid">
  <div class="hero-text"><p class="eyebrow"><span class="square-dot" aria-hidden="true"></span><span ${i18n("hero.hello")}>${en("hero.hello")}</span></p>
  <h1 id="hero-name" data-site-name>${CONFIG.name}</h1>
  <p class="tagline"><span ${i18n("hero.profession")}>${en("hero.profession")}</span><br><span class="accent-line" ${i18n("hero.game")}>${en("hero.game")}</span></p>
  <p class="intro" ${i18n("hero.intro")}>${en("hero.intro")}</p>
  <div class="hero-actions"><a class="btn" href="#projects"><span ${i18n("hero.projects")}>${en("hero.projects")}</span><span class="directional" aria-hidden="true">↗</span></a><a class="btn btn-secondary" href="#contact" ${i18n("hero.contact")}>${en("hero.contact")}</a></div>
  </div>
  <div class="hero-art">${ProjectSpotlight()}
    <div class="hero-note"><img src="assets/profile.jpg" width="64" height="64" ${i18nAttr("alt","hero.alt")}><span ${i18n("hero.note")}>${en("hero.note")}</span></div>
  </div>
</div><div class="hero-strip" aria-hidden="true"><div class="container"><span>AI / WEB / GAMES</span><span>BUILT WITH CURIOSITY ↙</span></div></div></section>`;
