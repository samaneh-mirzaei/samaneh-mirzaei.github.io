import { PROJECTS } from '../data/projects.js';
import { i18n,en,i18nAttr } from '../i18n/markup.js';
import { escapeHtml } from '../utils/html.js';

export function ProjectSpotlight() {
  const initial=PROJECTS.findIndex(project=>project.key==='d.p6');
  return `<div class="spotlight" data-spotlight data-active="${initial}" role="region" ${i18nAttr('aria-label','spotlight.label')}>
    <div class="spotlight-stage" tabindex="0" ${i18nAttr('aria-label','spotlight.browse')}>
      ${PROJECTS.map((project,index)=>`<a class="hero-work spotlight-slide" data-slide="${index}" href="#project-${project.key.replaceAll('.','-')}" ${index===initial?'':'hidden'}>
        <div class="work-title"><span ${i18n('spotlight.label')}>${en('spotlight.label')}</span><span aria-hidden="true">↗</span></div>
        <img src="${escapeHtml(project.image.src)}" alt="${escapeHtml(project.image.alt)}" width="1180" height="800" ${index===initial?'fetchpriority="high"':'loading="lazy"'}>
        <div class="work-caption"><strong ${i18n(project.key+'.title')}>${en(project.key+'.title')}</strong><span>${escapeHtml(project.tags.slice(0,2).join(' · '))}</span></div>
      </a>`).join('')}
    </div>
    <div class="spotlight-controls">
      <button class="spotlight-arrow" data-step="-1" type="button" ${i18nAttr('aria-label','spotlight.previous')}><span class="directional" aria-hidden="true">←</span></button>
      <div class="spotlight-choices" role="group" ${i18nAttr('aria-label','spotlight.choose')}>
        ${PROJECTS.map((project,index)=>`<button type="button" class="spotlight-choice" data-choose="${index}" aria-pressed="${index===initial}" aria-label="${en(project.key+'.title')}" title="${en(project.key+'.title')}" data-i18n-attr="aria-label:${project.key}.title,title:${project.key}.title">${String(index+1).padStart(2,'0')}</button>`).join('')}
      </div>
      <button class="spotlight-arrow" data-step="1" type="button" ${i18nAttr('aria-label','spotlight.next')}><span class="directional" aria-hidden="true">→</span></button>
    </div>
    <p class="spotlight-help" ${i18n('spotlight.help')}>${en('spotlight.help')}</p>
    <p class="sr-only" data-spotlight-status aria-live="polite" aria-atomic="true"></p>
  </div>`;
}
