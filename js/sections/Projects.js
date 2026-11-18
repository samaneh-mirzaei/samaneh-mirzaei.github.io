import { PROJECTS } from '../data/projects.js';
import { PROJECT_CATEGORIES } from '../data/projectCategories.js';
import { Section } from '../components/Section.js';
import { ProjectCard } from '../components/ProjectCard.js';
import { CreativeWork } from './CreativeWork.js';
import { i18n,en } from '../i18n/markup.js';

export const Projects=()=>Section({
  id:'projects',titleKey:'d.projects.title',ledeKey:'d.projects.lede',
  children: `<nav class="project-category-links" ${'aria-label="'+en('projects.browse')+'" data-i18n-attr="aria-label:projects.browse"'}>
    ${PROJECT_CATEGORIES.map(({id,key})=>`<a href="#projects-${id}" ${i18n(key)}>${en(key)}</a>`).join('')}
    <a href="#creative-work" ${i18n('art.title')}>${en('art.title')}</a>
  </nav>
  <div class="project-category-grid">
  ${PROJECT_CATEGORIES.map(({id,key})=>`<section class="project-category" id="projects-${id}" aria-labelledby="projects-${id}-title"><h3 id="projects-${id}-title" ${i18n(key)}>${en(key)}</h3><div class="proj-grid">${PROJECTS.map((project,index)=>project.category===id?ProjectCard(project,index):'').join('')}</div></section>`).join('')}
  ${CreativeWork()}
  </div>`
});
