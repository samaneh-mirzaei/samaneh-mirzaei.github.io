import { LANG_EVENT } from '../config.js';
/** Equal card heights across category grids, measured from content rather than a fixed minimum. */
export function initProjectHeights(){
  const section=document.getElementById('projects');
  const cards=[...section?.querySelectorAll('.project-card, .art-card')||[]];
  if(!cards.length)return;
  let pending=false,lastWidth=0;
  function measure(){
    pending=false;
    const mediaWidths=[...section.querySelectorAll('.project-image')].map(el=>el.getBoundingClientRect().width);
    if(mediaWidths.length)section.style.setProperty('--project-media-width',Math.min(...mediaWidths)+'px');
    ['--project-tags-height','--project-meta-height','--category-heading-height'].forEach(key=>section.style.removeProperty(key));
    const maxHeight=selector=>Math.ceil(Math.max(0,...[...section.querySelectorAll(selector)].map(el=>el.getBoundingClientRect().height)));
    section.style.setProperty('--project-tags-height',maxHeight('.project-card>.tags, .art-card>.tags')+'px');
    section.style.setProperty('--project-meta-height',maxHeight('.project-card>.meta, .art-card>.meta')+'px');
    section.style.setProperty('--category-heading-height',maxHeight('.project-category>h3')+'px');
    cards.forEach(card=>{card.style.height='auto';card.style.alignSelf='start';});
    const height=Math.ceil(Math.max(...cards.map(card=>card.getBoundingClientRect().height)));
    section.style.setProperty('--project-card-height',height+'px');
    cards.forEach(card=>{card.style.removeProperty('height');card.style.removeProperty('align-self');});
  }
  function schedule(){if(!pending){pending=true;requestAnimationFrame(measure);}}
  const container=section.querySelector('.container');
  if('ResizeObserver' in window)new ResizeObserver(entries=>{
    const width=entries[0].contentRect.width;
    if(Math.abs(width-lastWidth)>.5){lastWidth=width;schedule();}
  }).observe(container);
  else window.addEventListener('resize',schedule);
  document.addEventListener(LANG_EVENT,schedule);
  document.fonts?.ready.then(schedule);
  schedule();
}
