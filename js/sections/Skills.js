import { SKILL_GROUPS } from '../data/skillGroups.js';
import { Section } from '../components/Section.js';
import { Tags } from '../components/Tags.js';
import { i18n,en } from '../i18n/markup.js';
export const Skills=()=>Section({id:'skills',titleKey:'about.skills.title',ledeKey:'skills.intro',children:`<div class="skills-grid">${SKILL_GROUPS.map(({id,items},index)=>`<article class="skill-group"><div class="skill-heading"><span class="block-index" aria-hidden="true">0${index+1}</span><h3 ${i18n('skills.'+id)}>${en('skills.'+id)}</h3></div>${Tags(items)}</article>`).join('')}</div>`});
