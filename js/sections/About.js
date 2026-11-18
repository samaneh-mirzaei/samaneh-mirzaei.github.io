import { i18n,en } from "../i18n/markup.js";
import { Section } from "../components/Section.js";
const block=(name,number)=>`<article class="about-block about-${name}"><span class="block-index" aria-hidden="true">${number}</span><h3 ${i18n('about.'+name+'.title')}>${en('about.'+name+'.title')}</h3><p ${i18n('about.'+name+'.text')}>${en('about.'+name+'.text')}</p></article>`;
export const About=()=>Section({id:'about',titleKey:'about.title',children: `<div class="about-grid">${block('background','01')}<div class="about-side">${block('interests','02')}${block('goals','03')}</div></div><a class="more-link" href="#projects" ${i18n('about.more')}>${en('about.more')}</a>`});
